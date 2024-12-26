import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { getUserDetail } from "../Api/index";

const useUser = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    "user",
    async () => {
      try {
        const userDetail = await getUserDetail();
        return userDetail;
      } catch (err) {
        if (!err.message.includes("User is not Authenticated")) {
          toast.warn("Something went wrong...!");
        }
        throw err; // Ensure the error is propagated for react-query to handle it
      }
    },
    { refetchOnWindowFocus: false }
  );

  return { data, isLoading, isError, error, refetch };
};

export default useUser;