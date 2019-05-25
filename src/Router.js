import React from 'react';

import {Scene, Router, Stack, ActionConst, Actions} from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return(
      <Router>
        <Scene key='root' hideNavBar panHandlers={null}>
          <Scene key={'auth'}>
            <Scene
                key={'login'}
                component={LoginForm}
                title={'Please Login.'}
            />
          </Scene>
          <Scene key={'main'}>
            <Scene
                onRight={() => Actions.employeeCreate()}
                rightTitle='Add'
                key={'employeeList'}
                component={EmployeeList}
                title={'Employees'}
            />
            <Scene
                key={'employeeCreate'}
                title={'Create employee'}
                component={EmployeeCreate}
            />
            <Scene
              key={'employeeEdit'}
              title={'Edit employee'}
              component={EmployeeEdit}
            />
          </Scene>
        </Scene>
      </Router>
  )
};

export default RouterComponent;