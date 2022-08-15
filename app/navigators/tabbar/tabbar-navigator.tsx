import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import { CouponsScreen, HomeScreen, ShoppingCartScreen, AccountScreen } from "../../screens"
import { color } from "../../theme"
import { translate } from "../../i18n"
import { observer } from "mobx-react-lite"
import { useStores } from "../../models"

export type TabbarNavigatorParamList = {
  home: undefined
  coupons: undefined
  shoppingCart: undefined
  account: undefined
}

const Tab = createBottomTabNavigator<TabbarNavigatorParamList>()
export const TabbarNavigator = observer(() => {
  const { accountStore } = useStores()
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon
          switch (route.name) {
            case "home":
              icon = focused ? "home" : "home-outline"
              break
            case "coupons":
              icon = focused ? "rocket" : "rocket-outline"
              break
            case "shoppingCart":
              icon = focused ? "cart" : "cart-outline"
              break
            case "account":
              icon = focused ? "person-circle" : "person-circle-outline"
              break
          }
          return <Ionicons name={icon} size={size} color={color} />
        },
        tabBarActiveTintColor: color.primary,
        tabBarInactiveTintColor: color.dim,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{ title: translate("tabbar.home") }}
      />
      <Tab.Screen
        name="coupons"
        component={CouponsScreen}
        options={{ title: translate("tabbar.coupons") }}
      />
      <Tab.Screen
        name="shoppingCart"
        component={ShoppingCartScreen}
        options={{
          title: translate("tabbar.shoppingCart"),
          tabBarBadge: accountStore.cart.length || null,
        }}
      />
      <Tab.Screen
        name="account"
        component={AccountScreen}
        options={{ title: translate("tabbar.account") }}
      />
    </Tab.Navigator>
  )
})
