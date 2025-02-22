# st_ant_statistic

This is a Streamlit custom component that brings Ant Design's Statistic component to your Streamlit apps. It allows you to display a statistic with a title and a value, with optional prefix and suffix, all with customizable styles. You can also control the precision of the value and decide whether to show a loading animation. The component can be displayed as a standalone statistic or within a card.

<a href="https://flucas-component-overview.streamlit.app/?preselect=5" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Streamlit-red?style=for-the-badge&logo=streamlit" alt="Live Demo">
</a>

## Installation

To install st_ant_statistic, you can use pip:

````
pip install st-ant-statistic
````

## Usage

To use the st_ant_statistic component, you just need to import it in your Streamlit script and call it like any other Streamlit function:

```` python
from st_ant_statistic import st_ant_statistic
````
```` python
st_ant_statistic(
    title="Statistic Title", 
    value=12345,
    prefix="$",
    suffix="USD",
    precision=2,
    loading=False,
    decimalSeperator=".",
    groupSeperator=",",
    valueStyle={"color": "red", "fontWeight": "bold"},
    titleStyle={"color": "blue", "fontWeight": "bold"},
    cardStyle={"backgroundColor": "lightgrey"},
    classStatistic="my-statistic-class",
    classTitle="my-title-class",
    classCard="my-card-class",
    key="ant_statistic",
    card=True,
    height=60,
    loadingAnimation=True,
    animationStarting=0,
    loadingDuration=3,
    card_bordered=True,
    card_hoverable=True,
    alignValue="center",
    alignTitle="center"
)
````

## Parameters

- `title` (str): The title of the statistic (HTML tags can be used).
- `value` (str|int): The value of the statistic.
- `prefix` (str, optional): The prefix of the value (HTML tags and Font Awesome icons as a string can be used and they will be rendered). Defaults to None.
- `suffix` (str, optional): The suffix of the value (HTML tags and Font Awesome icons as a string can be used and they will be rendered). Defaults to None.
- `precision` (int, optional): The precision of the value (only used when value is a float). Defaults to 2.
- `loading` (bool, optional): Loading status of Statistic. Defaults to False.
- `decimalSeperator` (str, optional): The decimal separator of the value. Defaults to ",".
- `groupSeperator` (str, optional): The group separator of the value. Defaults to ",".
- `valueStyle` (dict, optional): The style of the value. Defaults to {}.
- `titleStyle` (dict, optional): The style of the title. Defaults to {}.
- `cardStyle` (dict, optional): The style of the card. Defaults to {}.
- `classStatistic` (str, optional): The class of the statistic that will be added to the class attribute of the statistic. Defaults to None.
- `classTitle` (str, optional): The class of the title that will be added to the class attribute of the title. Defaults to None.
- `classCard` (str, optional): The class of the card that will be added to the class attribute of the card. Defaults to None.
- `key` (str, optional): The key used to save the state of the widget. Defaults to "ant_statistic".
- `card` (bool, optional): If the statistic should be rendered as a card. Defaults to False.
- `height` (int, optional): The height of the component. Defaults to 60
