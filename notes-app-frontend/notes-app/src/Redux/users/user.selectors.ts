import { RootState } from "../store";

const userEmail = (state: RootState) => state.user?.user?.email;