import React from "react";
import { useParams } from "react-router";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";

const RepositoryItemDetail = () => {
  const { id } = useParams();
  const { repository } = id && useRepository(id);

  if (repository) {
    return <RepositoryItem repo={repository} detailView={true} />;
  } else {
    return null;
  }
};

export default RepositoryItemDetail;
