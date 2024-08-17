/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {fonts} from './componants/fonts';
import {BorderedButton, GradiantButton} from './componants/buttons';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const {width, height} = Dimensions.get('window');

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#1C281C',
    flex: 1,
  };
  const [selectedTab, setSelectedTab] = useState('Chart');

  const circle1 = useRef(new Animated.ValueXY({x: width + 50, y: 0})).current;
  const circle2 = useRef(
    new Animated.ValueXY({x: -width + 100, y: height - 150}),
  ).current;

  const tabList = ['Basic', 'Chart', 'KP', 'Ashtakvarga', 'Dasha', 'Report'];
  const xml = `<svg width="379" height="236" viewBox="0 0 379 236" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_b_1_73)">
    <rect width="379" height="236" rx="16" fill="url(#paint0_linear_1_73)"/>
    <rect x="1" y="1" width="377" height="234" rx="15" stroke="white" stroke-width="2"/>
  </g>
  <path d="M188.5 2V23.5M188.5 23.5C247.5 67.5 284.9 32.4 302.5 54C325.5 76 297 97.5 341.5 119.5C293.5 139.5 324.5 170.7 302.5 183.5C270 206.5 244 169 188.5 214C142.5 172.5 104.9 200.7 76.5 183.5C55 170.479 81.5 135.5 39 119.5C84 97 51 76.5 76.5 54C102 31.5 134.5 67.5 188.5 23.5Z" stroke="white"/>
  <path d="M340 119H376.5" stroke="white"/>
  <path d="M40 119.5H2.5" stroke="white"/>
  <path d="M188.5 212.5V231.5" stroke="white"/>
  <path d="M373.5 6.5L5 228.5" stroke="white"/>
  <path d="M5.5 9L374.5 228.5" stroke="white"/>
  <defs>
    <filter id="filter0_b_1_73" x="-25" y="-25" width="429" height="286" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_73"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_73" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_1_73" x1="-97.6804" y1="35.7574" x2="253.353" y2="387.123" gradientUnits="userSpaceOnUse">
      <stop stop-color="white" stop-opacity="0.08"/>
      <stop offset="1" stop-color="white" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <!-- Add text elements -->
  <text x="120" y="30" font-size="14" fill="white">8</text>
  <text x="40" y="90" font-size="14" fill="white">9</text>
  <text x="40" y="160" font-size="14" fill="white">11</text>
  <text x="20" y="190" font-size="14" fill="white">Me</text>
  <text x="60" y="220" font-size="14" fill="white">Su Ju</text>
  <text x="130" y="210" font-size="14" fill="white">12</text>
  <text x="220" y="220" font-size="14" fill="white">2</text>
  <text x="80" y="120" font-size="14" fill="white">Ke</text>
  <text x="150" y="125" font-size="14" fill="white">10</text>
  <text x="150" y="60" font-size="14" fill="white">Ma</text>
  <text x="180" y="100" font-size="14" fill="white">7</text>
  <text x="150" y="170" font-size="14" fill="white">Ve Sa</text>
  <text x="170" y="150" font-size="14" fill="white">1</text>
  <text x="220" y="125" font-size="14" fill="white">4</text>
  <text x="250" y="125" font-size="14" fill="white">Ra</text>
  <text x="330" y="150" font-size="14" fill="white">3</text>
  <text x="330" y="100" font-size="14" fill="white">5</text>
  <text x="320" y="65" font-size="14" fill="white">Mo</text>
  <text x="250" y="30" font-size="14" fill="white">6</text>
  
</svg>`; // svg of kundli map and make dynamic texts according to the houses

  const planets = [
    {
      name: 'Ascendant',
      sign: 'Pisces',
      lord: 'Jupiter',
      degree: '13°13’24',
      house: 1,
    },
    {
      name: 'Sun',
      sign: 'Sagittarius',
      lord: 'Jupiter',
      degree: '13°13’24',
      house: 10,
    },
    {
      name: 'Moon',
      sign: 'Aries',
      lord: 'Mars',
      degree: '13°13’24',
      house: 2,
    },
    {
      name: 'Mercury',
      sign: 'Capricorn',
      lord: 'Saturn',
      degree: '13°13’24',
      house: 11,
    },
    {
      name: 'Venus',
      sign: 'Capricorn',
      lord: 'Saturn',
      degree: '13°13’24',
      house: 11,
    },
    {
      name: 'Mars',
      sign: 'Capricorn',
      lord: 'Saturn',
      degree: '13°13’24',
      house: 11,
    },
    {
      name: 'Jupiter',
      sign: 'Sagittarius',
      lord: 'Jupiter',
      degree: '13°13’24',
      house: 10,
    },
    {
      name: 'Saturn',
      sign: 'Aquarius',
      lord: 'Jupiter',
      degree: '13°13’24',
      house: 12,
    },
    {
      name: 'Rahu',
      sign: 'Vigro',
      lord: 'Mercury',
      degree: '13°13’24',
      house: 12,
    },
    {
      name: 'Ketu',
      sign: 'Pisces',
      lord: 'Mercury',
      degree: '13°13’24',
      house: 12,
    },
    {
      name: 'Neptune',
      sign: 'Capricorn',
      lord: 'Saturn',
      degree: '13°13’24',
      house: 12,
    },
    {
      name: 'Uranus',
      sign: 'Capricorn',
      lord: 'Saturn',
      degree: '13°13’24',
      house: 12,
    },
    {
      name: 'Pluto',
      sign: 'Capricorn',
      lord: 'Saturn',
      degree: '13°13’24',
      house: 12,
    },
  ];

  const content = [
    {
      title: 'Description',
      description:
        "Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.",
    },
    {
      title: 'Personality',
      description:
        "Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.",
    },
    {
      title: 'Career',
      description:
        "Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.",
    },
    {
      title: 'Health',
      description:
        "Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.",
    },
  ];

  const circleXml = `<svg width="369" height="358" viewBox="0 0 369 358" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.4" filter="url(#filter0_f_1_36)">
<circle cx="361" cy="361" r="177" fill="#FEB640"/>
</g>
<defs>
<filter id="filter0_f_1_36" x="0" y="-364" width="722" height="722" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="92" result="effect1_foregroundBlur_1_36"/>
</filter>
</defs>
</svg>
`;

  useEffect(() => {
    const animateCircle1 = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(circle1, {
            toValue: {x: -width + 100, y: 0},
            duration: 4000,
            useNativeDriver: false,
          }),
          Animated.timing(circle1, {
            toValue: {x: -width + 100, y: height - 150},
            duration: 4000,
            useNativeDriver: false,
          }),
          Animated.timing(circle1, {
            toValue: {x: width - 50, y: height - 150},
            duration: 4000,
            useNativeDriver: false,
          }),
          Animated.timing(circle1, {
            toValue: {x: width - 50, y: 0},
            duration: 4000,
            useNativeDriver: false,
          }),
        ]),
      ).start();
    };

    const animateCircle2 = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(circle2, {
            toValue: {x: width - 50, y: height - 150},
            duration: 4000,
            useNativeDriver: false,
          }),
          Animated.timing(circle2, {
            toValue: {x: width - 50, y: 0},
            duration: 4000,
            useNativeDriver: false,
          }),
          Animated.timing(circle2, {
            toValue: {x: -width + 100, y: 0},
            duration: 4000,
            useNativeDriver: false,
          }),
          Animated.timing(circle2, {
            toValue: {x: -width + 100, y: height - 150},
            duration: 4000,
            useNativeDriver: false,
          }),
        ]),
      ).start();
    }; //animation of circle

    animateCircle1();
    animateCircle2();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, circle1.getLayout()]}>
        <View style={styles.innerCircle} />
        {/* change the view to correct svg as per use */}
      </Animated.View>
      <Animated.View style={[styles.circle, circle2.getLayout()]}>
        <View style={styles.innerCircle} />
        {/* change the view to correct svg as per use */}
      </Animated.View>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={{width: '100%', flexDirection: 'row'}}>
            <Image
              source={require('./assets/back.png')}
              style={{width: 30, height: 30}}
            />
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontFamily: fonts.releway.medium,
              }}>
              Kundali
            </Text>
          </View>
          <View
            style={{
              flex: 1,

              justifyContent: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              {tabList.map(item => {
                return (
                  <View
                    style={{
                      paddingHorizontal: 7,
                      borderRightWidth: 1,
                      borderRightColor: 'rgba(255,255,255,.7)',
                    }}>
                    <Text
                      onPress={() => setSelectedTab(item)}
                      style={{
                        fontSize: 12,
                        fontFamily:
                          selectedTab === item
                            ? fonts.poppins.bold
                            : fonts.poppins.light,
                        color: 'rgba(255,255,255,.7)',
                      }}>
                      {item}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <View style={{flex: 1, padding: 20}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <SvgXml xml={xml} width={'100%'} />
            <View style={{marginTop: 20, width: '100%'}}>
              <Text style={styles.headingText}>Planets</Text>
              <View
                style={{
                  width: '100%',
                  paddingTop: 10,
                  flexDirection: 'row',
                }}>
                <BorderedButton>
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: fonts.poppins.regular,
                      color: '#fff',
                    }}>
                    Sign
                  </Text>
                </BorderedButton>
                <GradiantButton style={{marginLeft: 10}}>
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: fonts.poppins.regular,
                      color: '#171717',
                      marginTop: 2,
                    }}>
                    Nakshatra
                  </Text>
                </GradiantButton>
              </View>
              <View style={{width: '100%', marginTop: 20}}>
                <View style={styles.tableHead}>
                  <View style={styles.headColumn}>
                    <Text
                      style={{
                        fontSize: 11,
                        fontFamily: fonts.poppins.medium,
                        color: '#fff',
                      }}>
                      Planet
                    </Text>
                  </View>
                  <View style={styles.headColumn}>
                    <Text
                      style={{
                        fontSize: 11,
                        fontFamily: fonts.poppins.medium,
                        color: '#fff',
                      }}>
                      Sign
                    </Text>
                  </View>
                  <View style={styles.headColumn}>
                    <Text
                      style={{
                        fontSize: 11,
                        fontFamily: fonts.poppins.medium,
                        color: '#fff',
                      }}>
                      Sign Lord
                    </Text>
                  </View>
                  <View style={styles.headColumn}>
                    <Text
                      style={{
                        fontSize: 11,
                        fontFamily: fonts.poppins.medium,
                        color: '#fff',
                      }}>
                      Degree
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '20%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 11,
                        fontFamily: fonts.poppins.medium,
                        color: '#fff',
                      }}>
                      House
                    </Text>
                  </View>
                </View>
                {planets.map((item, index) => {
                  return (
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(255,255,255,.1)',
                        flexDirection: 'row',
                        height: 40,
                        borderBottomLeftRadius:
                          index === planets.length - 1 ? 10 : 0,
                        borderBottomRightRadius:
                          index === planets.length - 1 ? 10 : 0,
                      }}>
                      <View style={styles.headColumn}>
                        <Text
                          style={{
                            fontSize: 11,
                            fontFamily: fonts.poppins.regular,
                            color: '#fff',
                          }}>
                          {item.name}
                        </Text>
                      </View>
                      <View style={styles.headColumn}>
                        <Text
                          style={{
                            fontSize: 11,
                            fontFamily: fonts.poppins.regular,
                            color: '#fff',
                          }}>
                          {item.sign}
                        </Text>
                      </View>
                      <View style={styles.headColumn}>
                        <Text
                          style={{
                            fontSize: 11,
                            fontFamily: fonts.poppins.regular,
                            color: '#fff',
                          }}>
                          {item.lord}
                        </Text>
                      </View>
                      <View style={styles.headColumn}>
                        <Text
                          style={{
                            fontSize: 11,
                            fontFamily: fonts.poppins.regular,
                            color: '#fff',
                          }}>
                          {item.degree}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '20%',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 11,
                            fontFamily: fonts.poppins.regular,
                            color: '#fff',
                          }}>
                          {item.house}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={{marginTop: 20, width: '100%'}}>
              <Text style={styles.headingText}>Understanding your Kundli</Text>
              <View
                style={{
                  width: '100%',
                  paddingTop: 10,
                  flexDirection: 'row',
                }}>
                <GradiantButton>
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: fonts.poppins.regular,
                      color: '#171717',
                      marginTop: 2,
                    }}>
                    General
                  </Text>
                </GradiantButton>
                <BorderedButton style={{marginLeft: 10}}>
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: fonts.poppins.regular,
                      color: '#fff',
                    }}>
                    Planetary
                  </Text>
                </BorderedButton>
                <BorderedButton style={{marginLeft: 10}}>
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: fonts.poppins.regular,
                      color: '#fff',
                    }}>
                    Yoga
                  </Text>
                </BorderedButton>
              </View>

              {content.map(item => {
                return (
                  <View
                    style={{
                      width: '100%',
                      marginTop: 20,
                      padding: 10,
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: fonts.poppins.regular,
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 12,
                        fontFamily: fonts.poppins.regular,
                        marginTop: 10,
                      }}>
                      {item.description}
                    </Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C281C',
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    // backgroundColor: '#f00',
  },
  header: {
    width: '100%',
    height: 156,
    backgroundColor: 'rgba(255,255,255,.05)',
    padding: 20,
  },
  headingText: {fontSize: 17, color: '#fff', fontFamily: fonts.poppins.medium},
  circle: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 320 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
    // backgroundColor: 'rgba(254, 182, 64, 0.6)',
    shadowColor: 'rgba(254, 182, 64, 0.6)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.98,
    shadowRadius: 16.0,

    elevation: 24,
  },
  innerCircle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    // backgroundColor: 'rgba(254, 182, 64, 0.6)',
    shadowColor: 'rgba(254, 182, 64,,1)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.38,
    shadowRadius: 16.0,

    elevation: 24,
  },
  circle2: {
    backgroundColor: 'rgba(254, 182, 64, 0.6)',
  },
  tableHead: {
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'rgba(255,255,255,.5)',
    flexDirection: 'row',
    height: 40,
  },
  headColumn: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255,255,255,.2)',
  },
});

export default App;
