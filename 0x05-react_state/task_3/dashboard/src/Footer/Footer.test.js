import React from 'react';
import { mount, shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';
import { getFullYear, getFooterCopy } from '../utils/utils';

describe('Footer', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    it('Footer component renders "Copyright ${getFullYear()} - ${getFooterCopy(true)}"', () => {
        const wrapper = mount(<Footer />);
    });

    it("Tests that there is no link rendered when user is logged out within context", () => {
        const context = {
          user: {
            email: "",
            password: "",
            isLoggedIn: false,
          },
        };
    
        const wrapper = mount(
          <AppContext.Provider value={context}>
            <Footer />
          </AppContext.Provider>
        );
    
        expect(wrapper.find("a").length).toBe(0);
        expect(wrapper.find("a").exists()).toBe(false);
        expect(wrapper.text()).not.toContain("Contact us");
    
        wrapper.unmount();
      });

    it('renders the text "Copyright"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });
});