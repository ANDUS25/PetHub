import React, { useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ChatBubbleBottomCenterTextIcon,
  ChevronDoubleRightIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from 'react-native-heroicons/outline';
import BottomSheet from 'react-native-simple-bottom-sheet';
import Video from 'react-native-video';
import { useSelector } from 'react-redux';

import { HeaderContainer } from '../../Container';
import SocialSource from '../../JSON/Social.json';
import Colors from '../../utils/Colors';
import { GlobalAppTheme } from '../../utils/CommonUtils';
import { AppTheme } from '../../utils/Strings';

const { height, width } = Dimensions.get('window');

const Social = () => {
  const [mute, setMute] = useState(false);
  const [touchVideoId, setTouchVideoId] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [showCommentPanel, setShowCommentPanel] = useState(false);

  const video = useRef(null);
  const panelRef = useRef(null);

  const theme = useSelector(state => state.ThemeReducer.value);

  const handleMute = (index, item) => {
    // console.log(video.current.props.muted);
    setMute(!mute);
  };

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* <ScrollViewContainer> */}
      <HeaderContainer back={true} header={'Social'} Drawer={true} />

      <FlatList
        data={SocialSource}
        renderItem={(item, index) => (
          <View
            className="rounded-b-3xl my-4"
            key={index}
            style={{
              backgroundColor: GlobalAppTheme(theme, Colors.INFO_LIGHT, Colors.INFO_DARK)
            }}>
            <View
              onTouchStart={() => {
                setTouchVideoId(item.index + 1);
              }}>
              <Video
                source={{ uri: item.item?.VideoPath }}
                resizeMode={'cover'}
                ref={video}
                style={{ height: 200, width }}
                paused={touchVideoId !== item.index + 1}
                muted={touchVideoId == item.index + 1}
              />
            </View>
            <View className="flex flex-row items-center my-2">
              <Image
                source={{ uri: item?.item?.UserImage }}
                resizeMode="center"
                className="w-10 h-10 rounded-full mb-3 mx-4"
              />
              <View className="flex flex-row w-2/3">
                <View>
                  <Text
                    style={{ color: GlobalAppTheme(theme, Colors.BLACK, Colors.WHITE) }}>
                    {item?.item?.Title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Raleway-Medium',
                      color: GlobalAppTheme(theme, Colors.BLACK, Colors.WHITE),
                    }}
                    className="font-bold">
                    {item?.item?.UserIDName}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                className="bg-slate-300 p-1 rounded-xl opacity-50"
                onPress={() => handleMute(item.index + 1, item?.item)}>
                {mute || touchVideoId !== item.index + 1 ? (
                  <SpeakerWaveIcon name="mute" size={24} color="black" />
                ) : (
                  <SpeakerXMarkIcon name="unmute" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>

            <View className="bg-slate-500 items-center rounded-b-3xl py-2">
              <TouchableOpacity
                onPress={() => {
                  panelRef.current.togglePanel();
                  setShowCommentPanel(item.index + 1);
                }}>
                <ChatBubbleBottomCenterTextIcon
                  name="comments"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {/* </ScrollViewContainer> */}

      <BottomSheet
        ref={ref => (panelRef.current = ref)}
        sliderMinHeight={0}
        sliderMaxHeight={height}
        lineStyle={{ backgroundColor: theme === AppTheme.LIGHT ? '#fcf8f8' : '#363131' }}
        wrapperStyle={{
          backgroundColor: theme === AppTheme.LIGHT ? '#252424' : '#bdbdbd',
        }}>
        {SocialSource.map((item, index) => {
          return (
            <>
              {showCommentPanel === index && (
                <>
                  <ScrollView className="py-4">
                    {item.Comments.map((item, index) => {
                      return (
                        <View
                          key={index}
                          className="flex flex-row items-center  rounded-3xl my-2"
                          style={{
                            backgroundColor:
                              theme === AppTheme.LIGHT ? '#706d6d' : '#787575',
                          }}>
                          <View className="flex flex-col items-center my-2">
                            <Image
                              source={{ uri: item?.UserImage }}
                              resizeMode="center"
                              className="w-10 h-10 rounded-full mx-4"
                            />
                            <Text
                              style={{
                                color:
                                  theme === AppTheme.LIGHT ? '#e0dcdc' : '#1b1b1b',
                              }}>
                              {item?.User}
                            </Text>
                          </View>
                          <Text
                            style={{
                              color: theme === AppTheme.LIGHT ? '#e0dcdc' : '#1b1b1b',
                            }}>
                            {item?.Text}
                          </Text>
                        </View>
                      );
                    })}
                  </ScrollView>

                  <View className="flex flex-row justify-between items-center border-2 rounded-2xl p-2">
                    <TextInput
                      placeholder="Enter your comment here..."
                      multiline
                      className="w-72"
                      placeholderTextColor={
                        theme === AppTheme.LIGHT ? '#e3e2e2' : '#f1f1f1'
                      }
                      style={
                        theme === AppTheme.LIGHT
                          ? { color: '#e0dcdc', borderColor: '#1b1b1b' }
                          : { color: '#1b1b1b', borderColor: Colors.WHITE }
                      }
                    />
                    <TouchableOpacity className="p-3 bg-slate-500 rounded-2xl">
                      <ChevronDoubleRightIcon
                        name="send"
                        size={24}
                        color={Colors.WHITE}
                      />
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </>
          );
        })}
      </BottomSheet>
    </>
  );
};

export default Social;
