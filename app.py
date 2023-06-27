import streamlit  as st
from st_ant_statistic import st_ant_statistic
from typing import Dict



st.set_page_config(layout="wide")

st.title('Streamlit Ant Statistic Component Demo')
st.divider()
st.title('Basic Usage')
col_left, col_right = st.columns((1,1))

with col_left:
    

    loading_anmiation = st.checkbox("Loading Animation", value=False)
    loading_duration = st.slider("Loading Duration (in sec)", min_value=1, max_value=100, value=3)
    
    st_ant_statistic(
        title="My Statistic",
        value=150.243,
        prefix="<i class='fa-sharp fa-regular fa-truck' aria-hidden='true'></i>",
        precision=2,
        loadingAnimation=loading_anmiation,
        loadingDuration=loading_duration,
        decimalSeperator=",",
        custom_font_awesome_url= "https://kit.fontawesome.com/d115db5fb4.js"
    )

with col_right: 
    st.code("""
    st_ant_statistic(
        title="My Statistic",
        value=150.243,
        prefix="<i class='fa fa-check' aria-hidden='true'></i>",
        precision=2,
        loadingAnimation=loading_anmiation,
        loadingDuration=loading_duration,
        decimalSeperator=",",
    )
    """, language="python")
st.divider()
st.title("Card Style")

col_left, col_right = st.columns((1,1))

with col_left:
    card_border = st.checkbox("Card Border", value=False)
    card_hover = st.checkbox("Card Hover", value=True)
    st_ant_statistic(
        title="My Statistic",
        value=150.243,
        prefix="<i class='fa fa-check' aria-hidden='true'></i>",
        precision=2,
        decimalSeperator=",",
        card=True,
        card_bordered=card_border,
        card_hoverable=card_hover,
        cardStyle={"width":"95%", "background-color":"#f5f5f5", "border-radius":"50px", "border-color":"black", "margin":"10px"},
        key="card",
        height=200
    )

with col_right:
    st.code("""
    st_ant_statistic(
        title="My Statistic",
        value=150.243,
        prefix="<i class='fa fa-check' aria-hidden='true'></i>",
        precision=2,
        decimalSeperator=",",
        card=True,
        card_bordered=card_border,
        card_hoverable=card_hover,
        cardStyle={"width":"95%", "background-color":"#f5f5f5", "border-radius":"50px", "border-color":"black", "margin":"10px"},
        height=200
    """, language="python")

st.divider()

st.title("Custom Style")

col_left, col_right = st.columns((1,1))

with col_left:

    align_title = st.selectbox("Align Title", options=["left", "center", "right"], index=1)
    align_value = st.selectbox("Align Value", options=["left", "center", "right"], index=1)

    st_ant_statistic(
        title="My Statistic",
        value=100/3,
        prefix="<i class='fa fa-check' aria-hidden='true'></i>",
        precision=2,
        decimalSeperator=";",
        card=True,
        card_bordered=False,
        card_hoverable=True,
        cardStyle={"width":"95%", "background-color":"#f5f5f5", "border-radius":"50px", "border-color":"black", "margin":"10px"},
        key="custom",
        height=200,
        alignValue=align_value,
        titleStyle={"color":"red", "font-weight":"bold", f"text-align":align_title},
        valueStyle={"color":"blue", "font-weight":"bold"}
    )

with col_right:
    st.code("""
    st_ant_statistic(
        title="My Statistic",
        value=150.243,
        prefix="<i class='fa fa-check' aria-hidden='true'></i>",
        precision=2,
        decimalSeperator=",",
        card=True,
        card_bordered=False,
        card_hoverable=True,
        cardStyle={"width":"95%", "background-color":"#f5f5f5", "border-radius":"50px", "border-color":"black", "margin":"10px"},
        key="custom",
        height=200,
        alignValue=align_value,
        titleStyle={"color":"red", "font-weight":"bold", f"text-align":align_title},
        valueStyle={"color":"blue", "font-weight":"bold"}
    """, language="python")
