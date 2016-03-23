import * as React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../src/ListItem';
import List from '../src/List';

describe('List', () => {
    let result;
    const data = [ { text: "foo", value: 1 }, { text: "bar", value: 2 } ];
    const primitives = [ "foo", "bar", "baz" ];

    it('should render a ul', () => {
        result = shallow(<List data={data} />);
        expect(result.find('ul').length).toEqual(1);
    });

    it('should render ListItems', () => {
        result = shallow(<List data={data} />);
        expect(result.find(ListItem).length).toEqual(2);
    });

    it('should render ListItems (array of strings)', () => {
        result = shallow(<List data={primitives} />);
        expect(result.find(ListItem).length).toEqual(3);
    });

    it('should select', () => {
        result = shallow(<List data={data} textField="text" value={2} valueField="value" />);
        const items = result.find(ListItem);
        expect(items.at(0).shallow().hasClass('k-state-selected')).toBe(false);
        expect(items.at(1).shallow().hasClass('k-state-selected')).toBe(true);
    });

    it('should select (array of strings)', () => {
        result = shallow(<List data={primitives} value="bar" />);
        const items = result.find(ListItem);
        expect(items.at(0).shallow().hasClass('k-state-selected')).toBe(false);
        expect(items.at(1).shallow().hasClass('k-state-selected')).toBe(true);
    });

    it('should focus', () => {
        result = shallow(<List data={data} focused={0} textField="text" valueField="value" />);
        const items = result.find(ListItem);
        expect(items.at(0).shallow().hasClass('k-state-focused')).toBe(true);
        expect(items.at(1).shallow().hasClass('k-state-focused')).toBe(false);
    });

    it('should fire onClick', () => {
        const spy = jasmine.createSpy('spy');
        result = shallow(<List data={data} onClick={spy} textField="text" valueField="value" />);
        const items = result.find(ListItem);

        items.at(0).shallow().simulate('click');
        expect(spy).toHaveBeenCalledWith({ text: 'foo', value: 1 });

        items.at(1).shallow().simulate('click');
        expect(spy).toHaveBeenCalledWith({ text: 'bar', value: 2 });
    });

    it('should fire onClick (array of strings)', () => {
        const spy = jasmine.createSpy('spy');
        result = shallow(<List data={primitives} onClick={spy} />);
        const items = result.find(ListItem);

        items.at(0).shallow().simulate('click');
        expect(spy).toHaveBeenCalledWith("foo");

        items.at(1).shallow().simulate('click');
        expect(spy).toHaveBeenCalledWith("bar");
    });
});
