import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LearningPathList } from "./learningPath/LearningPathList";
import { LearningPathCreate } from "./learningPath/LearningPathCreate";
import { LearningPathEdit } from "./learningPath/LearningPathEdit";
import { LearningPathShow } from "./learningPath/LearningPathShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ScenarioList } from "./scenario/ScenarioList";
import { ScenarioCreate } from "./scenario/ScenarioCreate";
import { ScenarioEdit } from "./scenario/ScenarioEdit";
import { ScenarioShow } from "./scenario/ScenarioShow";
import { VisualizationList } from "./visualization/VisualizationList";
import { VisualizationCreate } from "./visualization/VisualizationCreate";
import { VisualizationEdit } from "./visualization/VisualizationEdit";
import { VisualizationShow } from "./visualization/VisualizationShow";
import { ProgressReportList } from "./progressReport/ProgressReportList";
import { ProgressReportCreate } from "./progressReport/ProgressReportCreate";
import { ProgressReportEdit } from "./progressReport/ProgressReportEdit";
import { ProgressReportShow } from "./progressReport/ProgressReportShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Math Mastery Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="LearningPath"
          list={LearningPathList}
          edit={LearningPathEdit}
          create={LearningPathCreate}
          show={LearningPathShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Scenario"
          list={ScenarioList}
          edit={ScenarioEdit}
          create={ScenarioCreate}
          show={ScenarioShow}
        />
        <Resource
          name="Visualization"
          list={VisualizationList}
          edit={VisualizationEdit}
          create={VisualizationCreate}
          show={VisualizationShow}
        />
        <Resource
          name="ProgressReport"
          list={ProgressReportList}
          edit={ProgressReportEdit}
          create={ProgressReportCreate}
          show={ProgressReportShow}
        />
      </Admin>
    </div>
  );
};

export default App;
