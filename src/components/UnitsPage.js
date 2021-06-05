import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Data from "../Data/age-of-empires-units";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Checkbox from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";
import { Link } from "react-router-dom";

const UnitsPage = (props) => {
  const [ageUnit, setAgeUnit] = useState([]);
  const [ageUnitFilter, setAgeUnitFilter] = useState([]);
  const [agesValue, setAgesValue] = useState(0);
  const [costFilter, setCostFilter] = useState([]);
  const [woodChecked, setWoodChecked] = useState(false);
  const [woodSlider, setWoodSlider] = useState(true);
  const [foodChecked, setFoodChecked] = useState(false);
  const [foodSlider, setFoodSlider] = useState(true);
  const [goldChecked, setGoldChecked] = useState(false);
  const [goldSlider, setGoldSlider] = useState(true);

  useEffect(() => {
    setAgeUnit(Data.units);
  });

  const handleChange = (event, newValue) => {
    const ageFilter = ageUnit.filter(
      (ages) => ages.age === event.target.outerText
    );
    setAgeUnitFilter(ageFilter);
    setAgesValue(newValue);
  };
  const handleWoodChecked = (event) => {
    setWoodSlider(!woodSlider);
    setWoodChecked(event.target.checked);
    const costFilter = ageUnit.filter((ages) => ages.cost && ages.cost.Wood);
    setCostFilter(costFilter);
  };
  const handleWoodCostValue = (event) => {
    const costFilter = ageUnit.filter(
      (ages) => ages.cost && ages.cost.Wood <= event.target.outerText
    );
    setCostFilter(costFilter);
  };

  const handleFoodChecked = (event) => {
    setFoodSlider(!foodSlider);
    setFoodChecked(event.target.checked);
    const costFilter = ageUnit.filter((ages) => ages.cost && ages.cost.Food);
    setCostFilter(costFilter);
  };
  const handleFoodCostValue = (event) => {
    const costFilter = ageUnit.filter(
      (ages) => ages.cost && ages.cost.Food <= event.target.outerText
    );
    setCostFilter(costFilter);
  };
  const handleGoldChecked = (event) => {
    setGoldSlider(!goldSlider);
    setGoldChecked(event.target.checked);
    const costFilter = ageUnit.filter((ages) => ages.cost && ages.cost.Gold);
    setCostFilter(costFilter);
  };

  const handleGoldCostValue = (event) => {
    const costFilter = ageUnit.filter(
      (ages) => ages.cost && ages.cost.Gold <= event.target.outerText
    );
    setCostFilter(costFilter);
  };

  return (
    <>
      <TopBar />
      <div className="agesFilterBox">
        <h3>Ages</h3>
        <div className="ageButton">
          <BottomNavigation
            value={agesValue}
            onChange={handleChange}
            showLabels
          >
            <BottomNavigationAction label="All" />
            <BottomNavigationAction label="Dark" />
            <BottomNavigationAction label="Feudal" />
            <BottomNavigationAction label="Castle" />
            <BottomNavigationAction label="Imperial" />
          </BottomNavigation>
        </div>
      </div>

      <div className="agesFilterBox">
        <h3>Costs</h3>
        <div className="costFilterBox">
          <div>
            <Checkbox
              checked={woodChecked}
              onChange={handleWoodChecked}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            Wood
            <Slider
              style={{ marginLeft: "20px" }}
              defaultValue={0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              onChange={handleWoodCostValue}
              marks
              disabled={woodSlider}
              min={0}
              max={200}
            />
          </div>
          <div>
            <Checkbox
              checked={foodChecked}
              onChange={handleFoodChecked}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            Food
            <Slider
              style={{ marginLeft: "26px" }}
              defaultValue={0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              onChange={handleFoodCostValue}
              marks
              disabled={foodSlider}
              min={0}
              max={200}
            />
          </div>
          <div>
            <Checkbox
              checked={goldChecked}
              onChange={handleGoldChecked}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            Gold
            <Slider
              style={{ marginLeft: "28px" }}
              defaultValue={0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleGoldCostValue}
              step={10}
              marks
              disabled={goldSlider}
              min={0}
              max={200}
            />
          </div>
        </div>

        <div className="tableBox">
          <table>
            <tr
              style={{ position: "sticky", top: "-1px", background: "white" }}
            >
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Costs</th>
            </tr>

            {woodChecked === false &&
              foodChecked === false &&
              goldChecked === false &&
              agesValue === 0 &&
              ageUnit.map((ages, index) => (
                <tr>
                  <td>{ages.id}</td>
                  <td>
                    <Link to={{ pathname: `/unitDetailPage`, data: ages }}>
                      {ages.name}
                    </Link>
                  </td>
                  <td>{ages.age}</td>
                  {ages.cost && ages.cost.Wood && ages.cost.Food && (
                    <td>
                      {"Wood: " + ages.cost.Wood}, {"Food: " + ages.cost.Food}
                    </td>
                  )}
                  {ages.cost && ages.cost.Gold && ages.cost.Wood && (
                    <td>
                      {"Gold: " + ages.cost.Gold}, {"Wood: " + ages.cost.Wood}
                    </td>
                  )}
                  {ages.cost && ages.cost.Food && ages.cost.Gold && (
                    <td>
                      {"Food: " + ages.cost.Food}, {"Gold: " + ages.cost.Gold}
                    </td>
                  )}
                  {ages.cost &&
                    ages.cost.Gold === undefined &&
                    ages.cost.Wood === undefined && (
                      <td>{"Food: " + ages.cost.Food}</td>
                    )}
                  {ages.cost &&
                    ages.cost.Wood === undefined &&
                    ages.cost.Food === undefined && (
                      <td>{"Gold: " + ages.cost.Gold}</td>
                    )}
                  {ages.cost &&
                    ages.cost.Gold === undefined &&
                    ages.cost.Food === undefined && (
                      <td>{"Wood: " + ages.cost.Wood}</td>
                    )}
                  {ages.cost === null && <td>No Costs</td>}
                </tr>
              ))}

            {ageUnitFilter.map((age, index) => (
              <tr>
                <td>{age.id}</td>
                <td>
                  <Link to={{ pathname: `/unitDetailPage`, data: age }}>
                    {age.name}
                  </Link>
                </td>
                <td>{age.age}</td>
                {age.cost && age.cost.Wood && age.cost.Food && (
                  <td>
                    {"Wood: " + age.cost.Wood}, {"Food: " + age.cost.Food}
                  </td>
                )}
                {age.cost && age.cost.Gold && age.cost.Wood && (
                  <td>
                    {"Gold: " + age.cost.Gold}, {"Wood: " + age.cost.Wood}
                  </td>
                )}
                {age.cost && age.cost.Food && age.cost.Gold && (
                  <td>
                    {"Food: " + age.cost.Food}, {"Gold: " + age.cost.Gold}
                  </td>
                )}
                {age.cost &&
                  age.cost.Gold === undefined &&
                  age.cost.Wood === undefined && (
                    <td>{"Food: " + age.cost.Food}</td>
                  )}
                {age.cost &&
                  age.cost.Wood === undefined &&
                  age.cost.Food === undefined && (
                    <td>{"Gold: " + age.cost.Gold}</td>
                  )}
                {age.cost &&
                  age.cost.Gold === undefined &&
                  age.cost.Food === undefined && (
                    <td>{"Wood: " + age.cost.Wood}</td>
                  )}
                {age.cost === null && <td>No Costs</td>}
              </tr>
            ))}

            {foodChecked | goldChecked | woodChecked &&
              costFilter.map((age, index) => (
                <tr>
                  <td>{age.id}</td>
                  <td>
                    <Link to={{ pathname: `/unitDetailPage`, data: age }}>
                      {age.name}
                    </Link>
                  </td>
                  <td>{age.age}</td>
                  {age.cost && age.cost.Wood && age.cost.Food && (
                    <td>
                      {"Wood: " + age.cost.Wood}, {"Food: " + age.cost.Food}
                    </td>
                  )}
                  {age.cost && age.cost.Gold && age.cost.Wood && (
                    <td>
                      {"Gold: " + age.cost.Gold}, {"Wood: " + age.cost.Wood}
                    </td>
                  )}
                  {age.cost && age.cost.Food && age.cost.Gold && (
                    <td>
                      {"Food: " + age.cost.Food}, {"Gold: " + age.cost.Gold}
                    </td>
                  )}
                  {age.cost &&
                    age.cost.Gold === undefined &&
                    age.cost.Wood === undefined && (
                      <td>{"Food: " + age.cost.Food}</td>
                    )}
                  {age.cost &&
                    age.cost.Wood === undefined &&
                    age.cost.Food === undefined && (
                      <td>{"Gold: " + age.cost.Gold}</td>
                    )}
                  {age.cost &&
                    age.cost.Gold === undefined &&
                    age.cost.Food === undefined && (
                      <td>{"Wood: " + age.cost.Wood}</td>
                    )}
                  {age.cost === null && <td>No Costs</td>}
                </tr>
              ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default UnitsPage;
