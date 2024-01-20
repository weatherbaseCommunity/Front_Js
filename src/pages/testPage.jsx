import axios from "axios";
import React, { useEffect, useState } from "react";
import ServerAxios from "../components/utils/ServerAxios";
import useAllPostList from "../services/post/useAllPostList";

export default function TestPage() {

  const {data, loading, error} = useAllPostList();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error : {error.message}</p>;
  }
  return (
    <div>
      <h1>Data API TEST</h1>
      <pre>{data && data[0].title}</pre>
    </div>
  )
}