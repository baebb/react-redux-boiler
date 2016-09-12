import React from 'react';
import { connect } from 'react-redux';


class Home extends React.Component {
    render() {
        return (
            <div>
                <ul></ul>
                <p>Sup Ross</p>
            </div>
        )
    }
}

export default connect(null,null)(Home);