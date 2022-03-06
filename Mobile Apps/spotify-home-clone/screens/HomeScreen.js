import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import PlaylistCard from "../components/PlaylistCard";
import ShowCard from "../components/ShowCard";
import { LinearGradient } from 'expo-linear-gradient';
import TrendingCard from "../components/TrendingCard";
import { trendingData,showsData, mixData, cardData } from "../data/Data";
import MixCard from "../components/MixCard";


const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#8a0a0a','#111','#111','#111','#111','#111',]}
        start={{x: -0.1, y: 0.2}}
        end={{x: 1, y: 1}}
        locations={[0.01,0.2,0.3,1,1,1]}
      >
      <ScrollView>
      <View style={styles.subContainer}>
      <Header />
      <View style={styles.cardContainer}>
        {cardData.map(dat=>
        <PlaylistCard key={dat.title} title={dat.title} img={dat.img} />
        )}
      </View>
      <View style={styles.showContainer}>
        <Text style={styles.text}>Shows to try</Text>
        <ScrollView horizontal={true}>
          {showsData.map(dat => 
          <ShowCard key={dat.title} title={dat.title} artists={dat.artists} img={dat.img} />
            )}
        </ScrollView>
      </View>
      <View style={styles.bestContainer}>
        <Text style={styles.text}>Top Mixes</Text>
        <ScrollView horizontal={true}>
          {mixData.map(dat =>
            <MixCard key={dat.title} title={dat.title} artists={dat.artists} img={dat.img}/>
          )}
        </ScrollView>
      </View>
      <View style={styles.bestContainer}>
        <Text style={styles.text}>Trending Now</Text>
        <ScrollView horizontal={true}>
          {
            trendingData.map(dat=>
              <TrendingCard key={dat.title} title={dat.title} artists={dat.artists} img={dat.img}/>
              )
          }
        </ScrollView>
      </View>
      </View>
        </ScrollView>
        </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111", 
  },
  subContainer:{
    paddingRight: 15,
    paddingLeft:15
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 210,
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  showContainer: {
    marginTop: 30,
    flex: 1,
    minHeight:60
  },
  bestContainer:{
    flex: 1,
    marginTop:30,
  }
});
