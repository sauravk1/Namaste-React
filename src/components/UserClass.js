import React from 'react';
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              // same as const [count] = useState(0);
              userInfo: {
                name: 'sam',
                location: 'default',
                avatar_url: 'https://dummy.com'
              }
        }

    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/sauravk1");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
    }
    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
              {/* NEVER UPDATE STATE VARIABLES DIRECTLY. USE SETSTATE() */}
              <img src={avatar_url} />
                <h2>Name: {name} </h2>
                <h3>Location: {location}</h3>
                <h4>Contact: </h4>
            </div>
          )
    }
}
export default UserClass;