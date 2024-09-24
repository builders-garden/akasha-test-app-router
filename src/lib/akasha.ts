import getSDK from "@akashaorg/core-sdk/lib/index";
import { GetBeamsQuery } from "@akashaorg/typings/lib/sdk/graphql-operation-types-new";

const sdk = getSDK();

const getAkashaBeams = async (): Promise<GetBeamsQuery["akashaBeamIndex"]> => {
  try {
    const beams = await sdk.services.gql.client.GetBeams({ last: 10 });
    return beams.akashaBeamIndex;
  } catch (error) {
    console.error("Error fetching Akasha beams", error);
    return null;
  }
};

export default getAkashaBeams;
