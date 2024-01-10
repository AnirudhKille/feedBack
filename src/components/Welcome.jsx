import axios from "axios";
import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:7777/feedback");
        const responseData = response.data;
        setData(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <table>
        <thead>
          <td>Visit</td>
          <td>Food Rating</td>
          <td>Service Rating</td>
          <td>Experience Rating</td>
          <td>Suggestion</td>
          <td>Recommend Restaurant</td>
          <td>Follow Up</td>
        </thead>
        <tbody>
          {data.map((datas) => {
            return (
              <tr>
                <td>{datas.visitOption}</td>
                <td>{datas.foodRating}</td>
                <td>{datas.serviceRating}</td>
                <td>{datas.experienceRating}</td>
                <td>{datas.suggestion}</td>
                <td>{datas.recommandResturant}</td>
                <td>{datas.followUp}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Welcome;
