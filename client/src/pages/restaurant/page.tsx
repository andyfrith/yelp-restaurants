import React from "react";
import { Grid, Cell } from "baseui/layout-grid";
import { useQuery } from "@apollo/client";
import { RouteComponentProps, useParams } from "@reach/router";
import { oc } from "ts-optchain";
import { businessQuery } from "../../graphql/queries/business";
import { Contact } from "./contact";
import { Name } from "./name";
import { Photos } from "./photos";
import { Reviews } from "./reviews";
import { Hours } from "./hours";
import { Layout } from "./layout";

interface Props extends RouteComponentProps {}

export const Restaurant: React.FC<Props> = (props) => {
  const params = useParams();
  const { loading, error, data } = useQuery(businessQuery, {
    variables: { id: params.id },
  });

  if (loading) return <p>LOADING</p>;

  const dataChain = oc(data);
  const businessData = dataChain();

  if (error && !businessData) return <p>ERROR: {error}</p>;

  return (
    <Layout>
      <Grid>
        <Cell span={[12]}>
          <Name
            name={businessData.business.name}
            price={businessData.business.price}
            rating={businessData.business.rating}
            isClosed={businessData.business.is_closed}
          />
        </Cell>
      </Grid>
      <Grid>
        <Cell span={[12, 12, 5]}>
          <Photos photos={businessData.business.photos} />
          <Contact
            url={businessData.business.url}
            display_phone={businessData.business.display_phone}
          />
        </Cell>
        <Cell span={[12, 12, 7]}>
          <Hours
            formatted_address={businessData.business.location.formatted_address}
            hours={businessData.business.hours[0].open}
          ></Hours>
        </Cell>
      </Grid>
      <Grid>
        <Cell span={[12]}>
          <Reviews reviews={businessData.business.reviews} />
        </Cell>
      </Grid>
    </Layout>
  );
};
