import { initializeApollo } from "../src/apollo";
import { gql, useQuery } from "@apollo/client";

const GET_COUNTRIES = gql`
  query {
    Country {
      _id
      name
    }
  }
`;

const Home = () => {
  const { data } = useQuery(GET_COUNTRIES);

  if (!data) return null;

  return (
    <ul className="countries">
      {data.Country.map((country) => (
        <li key={country._id}>{country.name}</li>
      ))}
    </ul>
  );
};

export default Home;

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_COUNTRIES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
