import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
  Snack,
  Alert
} from './style'

const SnackBars = () => {
  const dispatch = useDispatch();
  const alerts = useSelector(state => state.alerts);
  const maxAlertTime = 3000;

  useEffect(() => {
    const timer = setTimeout(() => { dispatch({type: 'removeAlerts'})}, maxAlertTime);

    return () => clearTimeout(timer)
  }, [alerts])

  const remove = alert => {
    const newAlerts = alerts.filter(item => item != alert);

    dispatch({
      type: 'setAlerts',
      alerts: newAlerts
    })
  }

  return (
    <Snack>
      {alerts ? alerts.map((alert, key) => (
        <Alert key={key} type={alert.type}>
          {IconByType(alert.type)}
          <span>{alert.text}</span>
          <i 
            className="fa fa-close action"
            onClick={() => remove(alert)}
          />
        </Alert>
      )) : null}
    </Snack>
  )
}

const IconByType = (type) => {
  switch (type) {
    case 'success':
      return <i className="fas fa-check-circle" />
    case 'danger':
      return <i className="fas fa-exclamation-circle" />
    case 'warning':
      return <i className="fas fa-exclamation-triangle" />
  }
}

export default SnackBars;
