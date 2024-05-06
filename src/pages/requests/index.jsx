import api from "@/http/api";
import { useAuthStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BasicTable from "@/components/BasicTable";
import { userRequestColumns } from "@/utils/columns/userRequests";
import { Button } from "@chakra-ui/react";
import { PlusIcon, TrashIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Requests = () => {
  const user = useAuthStore((state) => state.user);
  const { data, error, isLoading, isLoadingError, isError } = useQuery({
    queryKey: ["requests"],
    queryFn: () => api.get(`/user-requests/user`),
    select: (data) => data.data.data,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || isLoadingError) {
    return <div>Error: {error}</div>;
  }
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>View User Request</CardTitle>
            <CardDescription>
              List of all user requests will be displayed here.
            </CardDescription>
          </div>
          <Link to="/dashboard/requests/create">
            <Button variant="outline">
              <PlusIcon className="mr-2 w-5 h-5" />
              Create Request
            </Button>
          </Link>
        </div>
      </CardHeader>

      <CardContent>
        <BasicTable columns={userRequestColumns} data={data} />
      </CardContent>
    </Card>
  );
};

export default Requests;
