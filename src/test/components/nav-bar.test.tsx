import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from 'app/components/nav-bar';
import homeIcon from 'icons/home.svg';
import { NavBarLink } from 'app/models/nav-bar-link';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

describe('MultiLineInput component', () => {
    const aLink: NavBarLink = {
        pageRoute: '/fake-link',
        icon: homeIcon,
        altText: 'some alternative text',
    }
    const pageText = 'placeholder page text';
    const getDefaultComponent = () => {
        return <Router>
            <NavBar links={[aLink]} />
            <Switch>
                <Route exact path="/fake-link">
                    <div data-testid="pageText">{pageText}</div>
                </Route>
            </Switch>
        </Router>;
    };
    
    test('renders links', () => {
        render(getDefaultComponent());
        const label = screen.getByAltText(aLink.altText);
        expect(label).toBeInTheDocument();
    });

    test('clicking link opens page', () => {
        render(getDefaultComponent());
        const label = screen.getByAltText(aLink.altText);
        expect(screen.queryByTestId("pageText")).not.toBeInTheDocument();
        label.click()
        expect(screen.queryByTestId("pageText")).toBeInTheDocument();
    })
});