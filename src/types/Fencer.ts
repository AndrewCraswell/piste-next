import { GetFencersQuery } from "$queries"

// TODO: This should be using a getFencerById query to derive the type
export type Fencer = NonNullable<GetFencersQuery["Students"][0]>
