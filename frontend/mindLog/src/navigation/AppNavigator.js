import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import JournalEntryScreen from "../screens/JournalEntryScreen";
import MoodDetailScreen from "../screens/MoodDetailScreen";
import StatsScreen from "../screens/StatsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import EntriesScreen from "../screens/EntriesScreen";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import UserInfoScreen from "../screens/UserInfoScreen";
import MoreScreen from "../screens/MoreScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="UserInfo" component={UserInfoScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="JournalEntry" component={JournalEntryScreen} />
            <Stack.Screen name="MoodDetail" component={MoodDetailScreen} />
            <Stack.Screen name="StatsScreen" component={StatsScreen} />
            <Stack.Screen name="Calendar" component={CalendarScreen} />
            <Stack.Screen name="Entries" component={EntriesScreen} />
            <Stack.Screen name="More" component={MoreScreen} />
        </Stack.Navigator>
    );
}
