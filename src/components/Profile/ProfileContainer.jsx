import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileData, getStatus, savePhoto, updateStatus, saveProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfileData(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }
    render() {
        return (
            <div>
                <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
            </div>
        )
    }
}

/*status={this.props.status} updateStatus={this.props.updateStatus}*/

let mapStateToProps = (state) => ({
    profile : state.profilePage.profile,
    status : state.profilePage.status,
    authorizedUserId : state.auth.userId,
    isAuth : state.auth.isAuth,
});

export default compose(
    connect (mapStateToProps, {getProfileData, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
)(ProfileContainer)

