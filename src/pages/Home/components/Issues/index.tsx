import { useEffect, useState } from "react";
import { api } from "../../../../../src/utils/api";
import { dateFormatter } from "../../../../../src/utils/formatter";
import { IssuesContainer, StyledNavLink } from "./styles";

interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
}

export function Issues() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIssues() {
      try {
        const response = await api.get<Issue[]>(
          `repos/devlacerda/BlogProfileGitHub/issues`
        );
        setIssues(response.data);
      } catch (error) {
        console.error("Erro ao buscar issues:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchIssues();
  }, []);

  if (loading) {
    return <p>Carregando posts do blog...</p>;
  }

  return (
    <IssuesContainer>
      {issues.map((issue) => (
        <StyledNavLink key={issue.id} to={`/issue/${issue.number}`}>
          <div>
            <h2>{issue.title}</h2>
            <span>{dateFormatter.format(new Date(issue.created_at))}</span>
          </div>
          <p>{issue.body.substring(0, 140)}...</p>
        </StyledNavLink>
      ))}
    </IssuesContainer>
  );
}