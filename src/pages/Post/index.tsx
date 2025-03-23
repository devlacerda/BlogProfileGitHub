import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import { PostContainer, PostHeader, PostContent, BackButton } from "./styles";



interface Issue {
  title: string;
  body: string;
  created_at: string;
  comments: number;
  user: {
    login: string;
  };
  html_url: string;
}

export function Post() {
  const { number } = useParams<{ number: string }>();
  const [issue, setIssue] = useState<Issue | null>(null);
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1); 
  }

  useEffect(() => {
    async function fetchIssue() {
      try {
        const response = await api.get<Issue>(
          `repos/devlacerda/BlogProfileGitHub/issues/${number}`
        );
        setIssue(response.data);
      } catch (error: any) {
        console.error("Erro ao buscar a issue:", error.message);
      }
    }

    fetchIssue();
  }, [number]);

  if (!issue) return <p>Carregando post...</p>;

  return (
    <PostContainer>
      <BackButton onClick={handleGoBack}>← Voltar</BackButton>
      <PostHeader>
        <h1>{issue.title}</h1>
        <p>
          Por: <strong>{issue.user.login}</strong> |{" "}
          {new Date(issue.created_at).toLocaleDateString()}
        </p>
        <a href={issue.html_url} target="_blank" rel="noreferrer">
          Ver no GitHub
        </a>
        <hr />
      </PostHeader>

      <PostContent>{issue.body}</PostContent>
    </PostContainer>
  );
}