import React from 'react';
import { Button, Styles } from 'bitts';
import Header from 'components/shared/Header';

const LandingPage = React.createClass({
    propTypes: {
        
    },

    render () {
        const styles = this.styles();

        return (
            <div>
                Hello world
            </div>
        )
    },

    styles () {
        return {
            title: {
                color: Styles.Colors.RED,
                FontSize: Styles.FontSizes.XLARGE
            }
        }
    }
})