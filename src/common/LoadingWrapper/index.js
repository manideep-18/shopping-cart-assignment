import React from "react";

import { apiStatus as APIStatus } from "../../constants/ApiStatusConstants";

import "./styles.scss";

class LoadingWrapper extends React.Component {
  renderData = () => {
    const { apiStatus, children, onRetryClick } = this.props;

    switch (apiStatus) {
      case APIStatus.loading:
        return <span>Loading...</span>;
      case APIStatus.completed:
        return children;
      case APIStatus.error:
        return <button onClick={onRetryClick}>retry</button>;
    }
  };

  render() {
    const { apiStatus } = this.props;
    return (
      <div
        className={
          apiStatus !== APIStatus.completed ? "loadingWrapperContainer" : null
        }
      >
        {this.renderData()}
      </div>
    );
  }
}

export default LoadingWrapper;
