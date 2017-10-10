var React = require('react');
var Day = require('./Day');
import RecipeButton from './RecipeButton'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as chummyActionCreaters from "../redux/modules/chummy"


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: false
        }
    }

    handleNewRecipe = () => {
        this.setState(function () {
            console.log("New Recipe Form Requested!")
            this.props.recipeFormChanged(true)
            return {
                isHidden: !this.state.isHidden
            }
        })

    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="container">

                    <div className="intro">
                        <h1>
                            Make meal planning fun!
                        </h1>
                        <h2>
                            Start by adding a recipe in the top right. Assign those recipes to days and export into a
                            grocery list.
                        </h2>
                    </div>
                    <div className="days-container">
                        <RecipeButton handleNewRecipe={this.handleNewRecipe}/>
                        <Day header="Day 1" isHidden={this.state.isHidden}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({recipeButtonEnabled, recipeFormVisible}) {
    return { recipeButtonEnabled, recipeFormVisible }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(chummyActionCreaters, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
