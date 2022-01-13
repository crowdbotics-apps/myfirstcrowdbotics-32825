import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_492} />
      <View style={styles.View_1_3}>
        <View style={styles.View_1_509}>
          <View style={styles.View_1_510}>
            <Text style={styles.Text_1_510}>หัวหน้ากลุ่ม</Text>
          </View>
          <View style={styles.View_1_511}>
            <Text style={styles.Text_1_511}>ดูทั้งหมด</Text>
          </View>
        </View>
        <View style={styles.View_1_585}>
          <View style={styles.View_1_586}>
            <Text style={styles.Text_1_586}>สมาชิกในกลุ่ม</Text>
          </View>
          <View style={styles.View_1_587}>
            <Text style={styles.Text_1_587}>ดูทั้งหมด</Text>
          </View>
        </View>
        <View style={styles.View_1_687}>
          <View style={styles.View_1_580}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e86f/a064/ed722303f4f83de7c6abe91194857816"
              }}
              style={styles.ImageBackground_1_508}
            />
            <View style={styles.View_1_566} />
            <View style={styles.View_1_567}>
              <Text style={styles.Text_1_567}>ฮาแวเปาะ</Text>
            </View>
            <View style={styles.View_1_578}>
              <View style={styles.View_1_568}>
                <Text style={styles.Text_1_568}>AA</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c552/5de0/7f78198a766f26bbcdc99e3cbbe0f580"
                }}
                style={styles.ImageBackground_1_572}
              />
            </View>
            <View style={styles.View_1_577}>
              <View style={styles.View_1_569}>
                <Text style={styles.Text_1_569}>AA001</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ccf/74f7/f21855b41144bce336929ce6d5f52022"
                }}
                style={styles.ImageBackground_1_575}
              />
            </View>
          </View>
          <View style={styles.View_1_675}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e86f/a064/ed722303f4f83de7c6abe91194857816"
              }}
              style={styles.ImageBackground_1_676}
            />
            <View style={styles.View_1_677} />
            <View style={styles.View_1_678}>
              <Text style={styles.Text_1_678}>ฮาแวเปาะ</Text>
            </View>
            <View style={styles.View_1_679}>
              <View style={styles.View_1_680}>
                <Text style={styles.Text_1_680}>AA</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c552/5de0/7f78198a766f26bbcdc99e3cbbe0f580"
                }}
                style={styles.ImageBackground_1_681}
              />
            </View>
            <View style={styles.View_1_683}>
              <View style={styles.View_1_684}>
                <Text style={styles.Text_1_684}>AA001</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ccf/74f7/f21855b41144bce336929ce6d5f52022"
                }}
                style={styles.ImageBackground_1_685}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1_584}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8ca/f24d/28c96e3ccbe658324ecdab942c11c050"
            }}
            style={styles.ImageBackground_1_582}
          />
          <View style={styles.View_1_581} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6d3/11f4/22e3dbf4ee51eee838d07302fc44bb9a"
          }}
          style={styles.ImageBackground_1_588}
        />
        <View style={styles.View_1_624}>
          <View style={styles.View_1_625}>
            <View style={styles.View_1_626}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4755/f956/20864458b1139e442c29247a9c3738db"
                }}
                style={styles.ImageBackground_I1_626_1_606}
              />
              <View style={styles.View_I1_626_1_607}>
                <View style={styles.View_I1_626_1_607_1_609}>
                  <View style={styles.View_I1_626_1_607_1_610}>
                    <Text style={styles.Text_I1_626_1_607_1_610}>
                      มีเนาะ เจ๊ะแม
                    </Text>
                  </View>
                  <View style={styles.View_I1_626_1_607_1_611}>
                    <Text style={styles.Text_I1_626_1_607_1_611}>50 ปี</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_627}>
            <View style={styles.View_1_628}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad0b/6bcd/7ec7241ed6baa7c5f3db8e9e7806a6d4"
                }}
                style={styles.ImageBackground_I1_628_1_613}
              />
              <View style={styles.View_I1_628_1_614}>
                <View style={styles.View_I1_628_1_614_1_609}>
                  <View style={styles.View_I1_628_1_614_1_610}>
                    <Text style={styles.Text_I1_628_1_614_1_610}>
                      Green Salads
                    </Text>
                  </View>
                  <View style={styles.View_I1_628_1_614_1_611}>
                    <Text style={styles.Text_I1_628_1_614_1_611}>4 Dishes</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_629}>
            <View style={styles.View_1_630}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cc1/52ae/31765c1c87b4db256ede38c9138228d9"
                }}
                style={styles.ImageBackground_I1_630_1_616}
              />
              <View style={styles.View_I1_630_1_617}>
                <View style={styles.View_I1_630_1_617_1_609}>
                  <View style={styles.View_I1_630_1_617_1_610}>
                    <Text style={styles.Text_I1_630_1_617_1_610}>
                      Colorful Salads
                    </Text>
                  </View>
                  <View style={styles.View_I1_630_1_617_1_611}>
                    <Text style={styles.Text_I1_630_1_617_1_611}>2 Dishes</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_631}>
            <View style={styles.View_1_632}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc2/bd8a/e718ded5ae5809eabfda7ef075ae3055"
                }}
                style={styles.ImageBackground_I1_632_1_619}
              />
              <View style={styles.View_I1_632_1_620}>
                <View style={styles.View_I1_632_1_620_1_609}>
                  <View style={styles.View_I1_632_1_620_1_610}>
                    <Text style={styles.Text_I1_632_1_620_1_610}>
                      Breakfasts
                    </Text>
                  </View>
                  <View style={styles.View_I1_632_1_620_1_611}>
                    <Text style={styles.Text_I1_632_1_620_1_611}>3 Dishes</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_633}>
            <View style={styles.View_1_634}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/080e/3a42/d2f77c66baf61a9b84a7335de3239b51"
                }}
                style={styles.ImageBackground_I1_634_1_622}
              />
              <View style={styles.View_I1_634_1_623}>
                <View style={styles.View_I1_634_1_623_1_609}>
                  <View style={styles.View_I1_634_1_623_1_610}>
                    <Text style={styles.Text_I1_634_1_623_1_610}>
                      Fruit Salads
                    </Text>
                  </View>
                  <View style={styles.View_I1_634_1_623_1_611}>
                    <Text style={styles.Text_I1_634_1_623_1_611}>5 Dishes</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_1_492: {
    width: wp("104%"),
    minWidth: wp("104%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("-14%"),
    backgroundColor: "rgba(191, 115, 0, 1)"
  },
  View_1_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_509: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_510: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1_510: {
    color: "rgba(39, 44, 47, 1)",
    fontSize: 21.25615692138672,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_511: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1_511: {
    color: "rgba(242, 85, 35, 1)",
    fontSize: 14.177339553833008,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_585: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_586: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1_586: {
    color: "rgba(39, 44, 47, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_587: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1_587: {
    color: "rgba(242, 85, 35, 1)",
    fontSize: 14.177339553833008,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_687: {
    width: wp("441%"),
    minWidth: wp("441%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_580: {
    width: wp("220%"),
    minWidth: wp("220%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_508: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_566: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 239, 239, 1)",
    opacity: 0.7900000214576721
  },
  View_1_567: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("167%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_567: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_578: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("188%"),
    top: hp("0%")
  },
  View_1_568: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_568: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_572: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_577: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("200%"),
    top: hp("0%")
  },
  View_1_569: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_569: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_575: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_675: {
    width: wp("220%"),
    minWidth: wp("220%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("220%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_676: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_677: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 239, 239, 1)",
    opacity: 0.7900000214576721
  },
  View_1_678: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("167%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_678: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_679: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("188%"),
    top: hp("0%")
  },
  View_1_680: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_680: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_681: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_683: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("200%"),
    top: hp("0%")
  },
  View_1_684: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_684: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_685: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_584: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%")
  },
  ImageBackground_1_582: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1_581: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.5400000214576721,
    borderColor: "rgba(198, 198, 198, 1)",
    borderWidth: 1
  },
  ImageBackground_1_588: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("100%")
  },
  View_1_624: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_625: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_1_626: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("-2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_626_1_606: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I1_626_1_607: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_I1_626_1_607_1_609: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_626_1_607_1_610: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_626_1_607_1_610: {
    color: "rgba(39, 44, 47, 1)",
    fontSize: 11.137929916381836,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4241378974914551,
    textTransform: "none"
  },
  View_I1_626_1_607_1_611: {
    width: wp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_626_1_607_1_611: {
    color: "rgba(39, 44, 47, 1)",
    fontSize: 7.290639877319336,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2787191963195801,
    textTransform: "none"
  },
  View_1_627: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_1_628: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("-2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_628_1_613: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I1_628_1_614: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_I1_628_1_614_1_609: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_628_1_614_1_610: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_628_1_614_1_610: {
    color: "rgba(39, 44, 47, 1)",
    fontSize: 11.137929916381836,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4241378974914551,
    textTransform: "none"
  },
  View_I1_628_1_614_1_611: {
    width: wp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_628_1_614_1_611: {
    color: "rgba(39, 44, 47, 1)",
    fontSize: 7.290639877319336,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2787191963195801,
    textTransform: "none"
  },
  View_1_629: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_1_630: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("-2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_630_1_616: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I1_630_1_617: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_I1_630_1_617_1_609: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_630_1_617_1_610: {
    width: wp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_630_1_617_1_610: {
    color: "rgba(39, 44, 47, 1)",
    fontSize: 11.137929916381836,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4241378974914551,
    textTransform: "none"
  },
  View_I1_630_1_617_1_611: {
    width: wp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_630_1_617_1_611: {
    color: "rgba(39, 44, 47, 1)",
    fontSize: 7.290639877319336,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2787191963195801,
    textTransform: "none"
  },
  View_1_631: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_1_632: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("-2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_632_1_619: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I1_632_1_620: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_I1_632_1_620_1_609: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_632_1_620_1_610: {
    width: wp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_632_1_620_1_610: {
    color: "rgba(39, 44, 47, 1)",
    fontSize: 11.137929916381836,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4241378974914551,
    textTransform: "none"
  },
  View_I1_632_1_620_1_611: {
    width: wp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_632_1_620_1_611: {
    color: "rgba(39, 44, 47, 1)",
    fontSize: 7.290639877319336,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2787191963195801,
    textTransform: "none"
  },
  View_1_633: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("170%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_1_634: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("-2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_634_1_622: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I1_634_1_623: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_I1_634_1_623_1_609: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_634_1_623_1_610: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_634_1_623_1_610: {
    color: "rgba(39, 44, 47, 1)",
    fontSize: 11.137929916381836,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4241378974914551,
    textTransform: "none"
  },
  View_I1_634_1_623_1_611: {
    width: wp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_634_1_623_1_611: {
    color: "rgba(39, 44, 47, 1)",
    fontSize: 7.290639877319336,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2787191963195801,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
