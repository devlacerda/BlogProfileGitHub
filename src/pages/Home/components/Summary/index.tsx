import { useEffect, useState } from "react";
import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";
import { api } from "../../../../../src/utils/api"; // com alias ou ajuste o caminho
import { GitHubUser } from "../../../../../src/@types/github"; // com alias ou ajuste o caminho
import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";


export function Summary() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get<GitHubUser>("users/devlacerda");
        setUser(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) {
    return <p>Aguarde, carregando dado do GitHub...</p>;
  }

  return (
    <SummaryContainer>
      <img src={user?.avatar_url} alt="Avatar do usuário" />
      <section>
        <SummaryHeader>
          <h1>{user?.name}</h1>
          <a href={`https://github.com/${user?.login}`} target="_blank" rel="noreferrer">
            GITHUB
            <ArrowUpRight size={12} />
          </a>
        </SummaryHeader>
        <p>{user?.bio}</p>
        <SummaryAnchors>
          <div>
            <GithubLogo size={18} />
            <span>{user?.login}</span>
          </div>

          <div>
            <Buildings size={18} />
            <span>{user?.company || "Sem empresa"}</span>
          </div>

          <div>
            <Users size={18} />
            <span>{user?.followers} seguidores</span>
          </div>
        </SummaryAnchors>
      </section>
    </SummaryContainer>
  );
}