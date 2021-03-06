---
title: Overview
page_title: Overview | Kendo UI DropDownList for React
description: "Use the Kendo UI DropDownList component in a React project."
slug: overview_ddl_kendouiforreact
position: 1
---

# DropDownList Overview

The Kendo UI DropDownList is a React component which displays a list of values and allows for a single value selection from that list. User input is restricted within the predefined options.

To allow for a keyboard input, use the [Kendo UI ComboBox component for React]({% slug overview_combobox_kendouiforreact %}).

The DropDownList is part of the [kendo-react-dropdowns npm package](https://www.npmjs.com/package/@telerik/kendo-react-dropdowns).

**Figure 1: A template of the DropDownList**

![Template of the Kendo UI DropDownList for React](images/dropdownlist.png)

1. DropDownList interaction states
2. Filter input field
3. Drop-down list

## Demos

### Default Setup

```html-preview
    <div id="app"></div>
```
```jsx
    class DropDownListContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [ "Item 1", "Item 2", "Item 3" ],
                value: null
            }
        }

        onChange = (value) => {
            this.setState({
                value: value
            });
        }

        render() {
            return(
                <KendoReactDropdowns.DropDownList
                    data={this.state.data}
                    defaultItem="Select..."
                    onChange={this.onChange}
                    value={this.state.value}
                />
            )
        }
    }

    ReactDOM.render(
        <DropDownListContainer />,
        document.getElementById('app')
    );
```

## Configuration

### Data

The DropDownList enables you to bind data of a complex (objects) or a primitive (strings and numbers) type.

The [`defaultItem`]({% slug api_ddl_kendouiforreact %}#defaultitem-objectstringnumber) property type must match the data type. 

For example, if the [`data`]({% slug api_ddl_kendouiforreact %}#data-array) component contains objects, the `defaultItem` must be defined as an object with the same [`textField`]({% slug api_ddl_kendouiforreact %}#textfield-string) and [`valueField`]({% slug api_ddl_kendouiforreact %}#valuefield-string) as the data items.

The example below demonstrates how to bind to an array of primitive data.

```html
    <div id="app"></div>
```
```jsx
    class DropDownListContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [ 1, 2, 3 ],
                value: null
            }
        }

        onChange = (value) => {
            this.setState({
                value: value
            });
        }

        render() {
            return(
                <KendoReactDropdowns.DropDownList
                    data={this.state.data}
                    defaultItem="Select..."
                    onChange={this.onChange}
                    value={this.state.value}
                />
            )
        }
    }

    ReactDOM.render(
        <DropDownListContainer />,
        document.getElementById('app')
    );
```

The example below demonstrates how to bind to an array of objects.

```html
    <div id="app"></div>
```
```jsx
    class DropDownListContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [
                    { text: "Foo", value: 1 },
                    { text: "Bar", value: 2 },
                    { text: "Baz", value: 3 }
                ],
                value: null
            }
        }

        onChange = (value) => {
            this.setState({
                value: value
            });
        }

        render() {
            return(
                <KendoReactDropdowns.DropDownList
                    data={this.state.data}
                    defaultItem={{ text: "Select...", value: null }}
                    onChange={this.onChange}
                    textField="text"
                    value={this.state.value}
                    valueField="value"
                />
            )
        }
    }

    ReactDOM.render(
        <DropDownListContainer />,
        document.getElementById('app')
    );
```

### Value

The value of the DropDownList can be set through its `value` property. When the value changes, the component executes the [`onChange`]({% slug api_ddl_kendouiforreact %}#onchange-function) callback function.

> The DropDownList is designed as a controlled ReactJS input. The `onChange` event fires each time a user interacts with it. The new value is passed as an argument to the `onChange` callback and the high-order component is expected to update the DropDownList `value` through the props. If the high-order component fails to do so, the DropDownList does not change its value.

```html-preview
    <div id="app"></div>
```
```jsx
    class DropDownListContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [
                    { text: "Foo", value: 1 },
                    { text: "Bar", value: 2 },
                    { text: "Baz", value: 3 }
                ],
                value: 2
            };
        }

        onChange = (value) => {
            this.setState({
                value: value
            });
        }

        render() {
            const { data, value } = this.state;

            return (
                <div>
                    <KendoReactDropdowns.DropDownList
                        data={data}
                        defaultItem={{ text: "Select...", value: null }}
                        onChange={this.onChange}
                        textField="text"
                        valueField="value"
                        value={value}
                    />
                    <span>Selected value: <span style={{ color: "#f00" }}>{value}</span></span>
                </div>
            );
        }
    }

    ReactDOM.render(
        <DropDownListContainer />,
        document.getElementById('app')
    );
```

### Features

#### Search with Keyboard

By default, the user is able to navigate between items by providing a keyboard input. The default search functionality is case-insensitive and the delay before the search-text submitted by the user is cleared is 500 milliseconds.

To change these settings, use the [`ignoreCase`]({% slug api_ddl_kendouiforreact %}#ignorecase-booleandefault-true) and [`delay`]({% slug api_ddl_kendouiforreact %}#delay-number) properties.

```html-preview
    <div id="app"></div>
```
```jsx
    class DropDownListContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [ "Peter", "Jack", "Jane", "John", "Jacob", "Jake" ],
                value: "Peter"
            };
        }

        onChange = (value) => {
            this.setState({
                value: value
            });
        }

        render() {
            const { data, value } = this.state;

            return (
                <div>
                    <KendoReactDropdowns.DropDownList
                        data={data}
                        delay={1000}
                        onChange={this.onChange}
                        value={value}
                    />
                    <span>Selected value: <span style={{ color: "#f00" }}>{value}</span></span>
                </div>
            );
        }
    }

    ReactDOM.render(
        <div>
            <p>Focus the component and use the keyboard to navigate between items</p>
            <DropDownListContainer />
        </div>,
        document.getElementById('app')
    );
```

#### Filter the Items

By default, the DropDownList does not render a filter input field allowing the user to filter the options, and the [`filterable`]({% slug api_ddl_kendouiforreact %}#filterable-booleandefault-false) property is set to `false`. To render a filter input field, set `filterable` to `true`.

When the user changes the filter input value, the component executes its [`onFilter`]({% slug api_ddl_kendouiforreact %}#onfilter-function) callback. It is the developer's responsibility to perform the data filtration and to update the data of the DropDownList through its props. The `onFilter` callback is called with an empty string as an argument after the user selects an item from the list either with the mouse or by pressing `Enter`.

> The default functionality to search between items is automatically disabled if filtration is enabled.

```html-preview
    <div id="app"></div>
```
```jsx
    const data = [
        "Albania",
        "Andorra",
        "Armenia",
        "Austria",
        "Azerbaijan",
        "Belarus",
        "Belgium",
        "Bosnia & Herzegovina",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Georgia",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Kosovo",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macedonia",
        "Malta",
        "Moldova",
        "Monaco",
        "Netherlands",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "Russia",
        "San Marino",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Turkey",
        "Ukraine",
        "United Kingdom",
        "Vatican City"
    ];

    class DropDownListContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: null,
                data: data
            };
        }

        onChange = (value) => {
            this.setState({
                value: value,
            });
        }

        onFilter = (text) => {
            let result;

            if (text) {
                result = data.filter(function(item) {
                    return item.toLowerCase().startsWith(text.toLowerCase());
                });
            } else {
                result = data;
            }

            this.setState({
                data: result
            });
        }

        render() {
            const { data, value } = this.state;

            return (
                <div>
                    <KendoReactDropdowns.DropDownList
                        data={data}
                        filterable
                        onChange={this.onChange}
                        onFilter={this.onFilter}
                        value={value}
                    />
                    <span>Selected value: <span style={{ color: "#f00" }}>{value}</span></span>
                </div>
            );
        }
    }

    ReactDOM.render(
        <DropDownListContainer />,
        document.getElementById('app')
    );
```

#### Disable the DropDownList

The DropDownList allows you to prevent user input through disabling the component. By default, the DropDownList is enabled and the [`disabled`]({% slug api_ddl_kendouiforreact %}#disabled-booleandefault-false) property is set to `false`. 

```html-preview
    <div id="app"></div>
```
```jsx
    class DropDownListContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [ "Peter", "Jack", "Jane", "John", "Jacob", "Jake" ],
                value: "Peter",
                disabled: false
            };
        }

        onChange = (value) => {
            this.setState({
                value: value
            });
        };

        onClick = () => {
            this.setState({
                disabled: !this.state.disabled
            });
        }

        render() {
            const { data, value } = this.state;

            return (
                <div>
                    <KendoReactDropdowns.DropDownList
                        data={data}
                        delay={1000}
                        disabled={this.state.disabled}
                        onChange={this.onChange}
                        value={value}
                    />
                    <span>Selected value: <span style={{ color: "#f00" }}>{value}</span></span>
                    <div>
                        <button onClick={this.onClick}>{this.state.disabled ? "Enable" : "Disable"}</button>
                    </div>
                </div>
            );
        }
    }

    ReactDOM.render(
        <DropDownListContainer />,
        document.getElementById('app')
    );
```

#### Apply Custom Render Functions

By default, the component displays the [`textField`]({% slug api_ddl_kendouiforreact %}#textfield-string) of a selected item both in the list and in the header of the DropDownList. To overwrite this behavior, apply the [`itemRenderer`]({% slug api_ddl_kendouiforreact %}#itemrenderer-function) and [`valueRenderer`]({% slug api_ddl_kendouiforreact %}#valuerenderer-function) callbacks.

```html-preview
    <div id="app"></div>
```
```jsx
    function renderItem (dataItem) {
        return (
            <span>Item: <span style={{ color: "#0F0" }}>{dataItem.text}</span></span>
        );
    }

    function renderValue (dataItem) {
        return dataItem ? `Value: ${dataItem.value}` : '';
    }

    class DropDownListContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [
                    { value: 1, text: "Foo" },
                    { value: 2, text: "Bar" },
                    { value: 3, text: "Baz" }
                ],
                value: null
            };
        }

        onChange = (value) => {
            this.setState({
                value: value
            });
        };

        render() {
            const { data, value } = this.state;

            return (
                <KendoReactDropdowns.DropDownList
                    data={this.state.data}
                    itemRenderer={renderItem}
                    onChange={this.onChange}
                    textField="text"
                    valueField="value"
                    valueRenderer={renderValue}
                    value={this.state.value}
                />
            );
        }
    }

    ReactDOM.render(
        <DropDownListContainer />,
        document.getElementById('app')
    );
```

### Events

#### Change

The [`onChange`]({% slug api_ddl_kendouiforreact %}#onchange-function) callback function is fired when the DropDownList value changes.

> The DropDownList is designed as a controlled ReactJS input. The `onChange` event fires each time a user interacts with it. The new value is passed as an argument to the `onChange` callback and the high-order component is expected to update the DropDownList `value` through the props. If the high-order component fails to do so, the DropDownList does not change its value.

```html
    <div id="app"></div>
```
```jsx
    class DropDownListContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [
                    { value: 1, text: "Foo" },
                    { value: 2, text: "Bar" },
                    { value: 3, text: "Baz" }
                ],
                value: null
            };
        }

        onChange = (value) => {
            console.log("change callback:", value);
            this.setState({
                value: value
            });
        };

        render() {
            const { data, value } = this.state;

            return (
                <KendoReactDropdowns.DropDownList
                    data={this.state.data}
                    textField="text"
                    onChange={this.onChange}
                    valueField="value"
                    value={this.state.value}
                />
            );
        }
    }

    ReactDOM.render(
        <DropDownListContainer />,
        document.getElementById('app')
    );
```

#### Filter

The [`onFilter`]({% slug api_ddl_kendouiforreact %}#onfilter-function) callback function is fired when the DropDownList filter input changes. The [`onFilter`]({% slug api_ddl_kendouiforreact %}#onfilter-function) is also called with an empty string argument after the user selects an item from the list either with the mouse or by pressing `Enter`. 

```html
    <div id="app"></div>
```
```jsx
    const data = [
        { value: 1, text: "Foo" },
        { value: 2, text: "Bar" },
        { value: 3, text: "Baz" }
    ];

    class DropDownListContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: null,
                data: data
            };
        }

        onChange = (value) => {
            this.setState({
                value: value
            });
        }

        onFilter = (text) => {
            let result;

            if (text) {
                result = data.filter(function(item) {
                    return item.text.toLowerCase().startsWith(text.toLowerCase());
                });
            } else {
                result = data;
            }

            this.setState({
                data: result
            });
        }

        render() {
            const { data, value } = this.state;

            return (
                <div>
                    <KendoReactDropdowns.DropDownList
                        data={data}
                        filterable
                        onChange={this.onChange}
                        onFilter={this.onFilter}
                        textField="text"
                        value={value}
                        valueField="value"
                    />
                    <span>Selected value: <span style={{ color: "#f00" }}>{value}</span></span>
                </div>
            );
        }
    }

    ReactDOM.render(
        <DropDownListContainer />,
        document.getElementById('app')
    );
```

For detailed information on the on the DropDownList configuration, refer to its [API documentation]({% slug api_ddl_kendouiforreact %}).

## Keyboard Navigation

Below is the list of the keyboard shortcuts the DropDownList supports.

| SHORTCUT                            | DESCRIPTION         |
|:---                                 |:---                 |
| `Upper Arrow` & `Left Arrow` keys   | Highlight the previous item.      |
| `Down Arrow` & `Right Arrow` keys   | Highlight the next item.          |
| `Home`                              | Select the first list item.       |
| `End`                               | Select the last list item.        |
| `Enter`                             | Select the highlighted list item. |
| `ESC`                               | Close the popup.                  |
| `Alt` + `Upper Arrow`               | Close the popup.                  |
| `Alt` + `Down Arrow`                | Open the popup.                   |

## Accessibility

The DropDownList is WAI ARIA-accessible through the `Tab` key.

## Suggested Links

* [API Reference of the DropDownList]({% slug api_ddl_kendouiforreact %})
