import React, { useEffect } from "react";
import { Statistic, Card } from 'antd';
import CountUp from 'react-countup';
import { ComponentProps, Streamlit, withStreamlitConnection } from "streamlit-component-lib";
import { Helmet } from 'react-helmet';

interface StatisticProps {
  title: string,
  value: string | number,
  prefix: string,
  suffix: string,
  precision: number,
  loading: boolean,
  decimalSeperator: string,
  groupSeperator: string,
  valueStyle: object,
  titleStyle: object,
  cardStyle: object,
  card: boolean,
  key: string,
  height: number,
  loadingAnimation: boolean,
  loadingDuration: number,
  card_bordered: boolean,
  card_hoverable: boolean,
  classStatistic: string,
  classTitle: string,
  classCard: string,
  alignValue: 'left' | 'right' | 'center',
  alignTitle: 'left' | 'right' | 'center',
  custom_font_awesome_url: string,
  animationStarting: number
}

const StatisticComponent = (props: ComponentProps) => {
  const { args } = props;

  const {
    title,
    value,
    prefix,
    suffix,
    precision,
    loading,
    decimalSeperator,
    groupSeperator,
    valueStyle,
    titleStyle,
    cardStyle,
    card,
    height,
    loadingAnimation,
    loadingDuration,
    card_bordered,
    card_hoverable,
    classStatistic,
    classTitle,
    classCard,
    alignValue,
    alignTitle,
    custom_font_awesome_url,
    animationStarting
  }: StatisticProps = args;


  const formatNumber = (value: number, precision: number, decimalSeperator: string): string => {
    let [whole, fraction] = Number(value).toFixed(precision).split('.');
    fraction = fraction ? decimalSeperator + fraction : '';
    return whole + fraction;
  };
  

  const formatter = (value: number | string) => {
    if (typeof value === 'string') {
      return value;
    } else if (loadingAnimation) {
      return (
        <CountUp
          end={value}
          separator={groupSeperator}
          decimals={precision}
          duration={loadingDuration}
          decimal={decimalSeperator}
          start={animationStarting}
        />
      );
    } else {
      return formatNumber(value, precision, decimalSeperator);
    }
  };

  // Send back a response to Streamlit
  useEffect(() => {
    Streamlit.setFrameHeight(height);
    Streamlit.setComponentReady();
  }, [height]);


  console.log(decimalSeperator)
  if (card) {
    return (
        <Card style={cardStyle} bordered={card_bordered} hoverable={card_hoverable} className={classCard}>
          <Helmet>
            <script
              src={custom_font_awesome_url}
              crossOrigin="anonymous"
              id="font-awesome-icons"
            />
          </Helmet>
          <Statistic
            className={classStatistic}
            title={<div className={classTitle} dangerouslySetInnerHTML={{__html: title}} style={titleStyle} />}
            value={value} // casting to any type
            prefix={prefix && <div dangerouslySetInnerHTML={{__html: prefix}} />}
            suffix={suffix && <div dangerouslySetInnerHTML={{__html: suffix}} />}
            precision={precision}
            loading={loading}
            decimalSeparator={decimalSeperator}
            groupSeparator={groupSeperator}
            valueStyle={{ ...valueStyle, textAlign: alignValue }}
            formatter={formatter}
          />
        </Card>
    );
  } else {
    return (
      <>
        <Helmet>
            <script
              src={custom_font_awesome_url}
              crossOrigin="anonymous"
              id="font-awesome-icons"
            />
        </Helmet>
          <Statistic
            className={classStatistic}
            title={
              <div 
                className={classTitle} 
                dangerouslySetInnerHTML={{__html: title}} 
                style={{ ...titleStyle, textAlign: alignTitle }}
              />
            }
            value={value} // casting to any type
            prefix={prefix && <div dangerouslySetInnerHTML={{__html: prefix}} />}
            suffix={suffix && <div dangerouslySetInnerHTML={{__html: suffix}} />}
            precision={precision}
            loading={loading}
            decimalSeparator={decimalSeperator}
            groupSeparator={groupSeperator}
            valueStyle={{ ...valueStyle, textAlign: alignValue }}
            formatter={formatter}
          />
      </>
    );
};
}

export default withStreamlitConnection(StatisticComponent);