import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

//4o17IGbFr5Eb5UO6 supabase password

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;

/* curl "https://dlctrxppsskpzoexjsoj.supabase.co/rest/v1/cabins?select=*" ^
  -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsY3RyeHBwc3NrcHpvZXhqc29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDQxMzEsImV4cCI6MjA1OTY4MDEzMX0.eoCawjQbwqk4zDpvbo5O3yrXmh0BIHfCER76RruL2G8" ^
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsY3RyeHBwc3NrcHpvZXhqc29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDQxMzEsImV4cCI6MjA1OTY4MDEzMX0.eoCawjQbwqk4zDpvbo5O3yrXmh0BIHfCER76RruL2G8" ^
  --ssl-no-revoke
 */
