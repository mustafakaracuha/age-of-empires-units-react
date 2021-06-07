import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";

const UnitDetailPage = (props) => {
  const { data } = props.location;

  useEffect(() => {});

  return (
    <>
      <TopBar />
      <div className="unitDetail">
        <h3>Unit Detail</h3>
        <div className="unitDetailBox">
          <h4>
            Id: <span>{data.name}</span>
          </h4>
          <h4>
            Name: <span>{data.name}</span>
          </h4>
          <h4>
            Description: <span>{data.description}</span>
          </h4>

          {data.cost !== null ? (
            <>
              <h4>
                Wood Cost: <span>{data.cost.Wood}</span>
              </h4>
              <h4>
                Food Cost: <span>{data.cost.Food}</span>
              </h4>
              <h4>
                Gold Cost: <span>{data.cost.Gold}</span>
              </h4>
            </>
          ) : (
            <>
              <h4>
                Wood Cost: <span>No Wood</span>
              </h4>
              <h4>
                Food Cost: <span>No Food</span>
              </h4>
              <h4>
                Gold Cost: <span>No Gold</span>
              </h4>
            </>
          )}

          <h4>
            Build Time: <span>{data.build_time}</span>
          </h4>
          <h4>
            Reload Time: <span>{data.reload_time}</span>
          </h4>
          <h4>
            Hit Points: <span>{data.hit_points}</span>
          </h4>
          <h4>
            Attack: <span>{data.attack}</span>
          </h4>
          <h4>
            Accuracy: <span>{data.accuracy}</span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default UnitDetailPage;
