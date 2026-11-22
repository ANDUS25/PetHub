import React, { useRef, useState } from 'react';
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
import { HeaderContainer } from '../../Container';
import SocialSource from '../../JSON/Social.json';
import { useAppSelector } from '../../store/store';
import Colors from '../../utils/color';
import { GlobalAppTheme } from '../../utils/CommonUtils';
import { AppTheme } from '../../utils/Strings';

const { height, width } = Dimensions.get('window');

interface CommentItem {
  User: string;
  UserImage: string;
  Text: string;
}

interface SocialPost {
  VideoPath: string;
  UserImage: string;
  Title: string;
  UserIDName: string;
  Comments: CommentItem[];
  [key: string]: any;
}

const Social: React.FC = () => {
  const [mute, setMute] = useState(false);
  const [touchVideoId, setTouchVideoId] = useState<number>(0);
  const [showCommentPanel, setShowCommentPanel] = useState<number | false>(false);

  const video = useRef<any>(null);
  const panelRef = useRef<any>(null);

  const theme = useAppSelector((state) => state.ThemeReducer.value);

  const handleMute = () => {
    setMute(!mute);
  };

  return (
    <>
      <HeaderContainer back={true} header={'Social'} Drawer={true} />

      <FlatList
        data={SocialSource as SocialPost[]}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            className="rounded-b-3xl my-4"
            key={index}
            style={{
              backgroundColor: GlobalAppTheme(
                theme,
                Colors.INFO_LIGHT,
                Colors.INFO_DARK,
              ),
            }}
          >
            <View
              onTouchStart={() => {
                setTouchVideoId(index + 1);
              }}
            >
              <Video
                source={{ uri: item.VideoPath }}
                resizeMode={'cover'}
                ref={video}
                style={{ height: 200, width }}
                paused={touchVideoId !== index + 1}
                muted={mute || touchVideoId !== index + 1}
              />
            </View>
            <View className="flex flex-row items-center my-2">
              <Image
                source={{ uri: item.UserImage }}
                resizeMode="center"
                className="w-10 h-10 rounded-full mb-3 mx-4"
              />
              <View className="flex flex-row w-2/3">
                <View>
                  <Text
                    style={{
                      color: GlobalAppTheme(theme, Colors.BLACK, Colors.WHITE),
                    }}
                  >
                    {item.Title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Raleway-Medium',
                      color: GlobalAppTheme(theme, Colors.BLACK, Colors.WHITE),
                    }}
                    className="font-bold"
                  >
                    {item.UserIDName}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                className="bg-slate-300 p-1 rounded-xl opacity-50"
                onPress={handleMute}
              >
                {mute || touchVideoId !== index + 1 ? (
                  <SpeakerWaveIcon size={24} color={Colors.BLACK} />
                ) : (
                  <SpeakerXMarkIcon size={24} color={Colors.BLACK} />
                )}
              </TouchableOpacity>
            </View>

            <View className="bg-slate-500 items-center rounded-b-3xl py-2">
              <TouchableOpacity
                onPress={() => {
                  panelRef.current?.togglePanel();
                  setShowCommentPanel(index + 1);
                }}
              >
                <ChatBubbleBottomCenterTextIcon
                  size={24}
                  color={Colors.BLACK}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <BottomSheet
        ref={(ref: any) => (panelRef.current = ref)}
        sliderMinHeight={0}
        sliderMaxHeight={height}
        lineStyle={{
          backgroundColor:
            theme === AppTheme.LIGHT ? '#fcf8f8' : '#363131',
        }}
        wrapperStyle={{
          backgroundColor:
            theme === AppTheme.LIGHT ? '#252424' : '#bdbdbd',
        }}
      >
        {(SocialSource as SocialPost[]).map((post, postIndex) => (
          <React.Fragment key={postIndex}>
            {showCommentPanel === postIndex + 1 && (
              <>
                <ScrollView className="py-4">
                  {post.Comments.map((comment, commentIndex) => (
                    <View
                      key={commentIndex}
                      className="flex flex-row items-center rounded-3xl my-2"
                      style={{
                        backgroundColor:
                          theme === AppTheme.LIGHT ? '#706d6d' : '#787575',
                      }}
                    >
                      <View className="flex flex-col items-center my-2">
                        <Image
                          source={{ uri: comment.UserImage }}
                          resizeMode="center"
                          className="w-10 h-10 rounded-full mx-4"
                        />
                        <Text
                          style={{
                            color:
                              theme === AppTheme.LIGHT ? '#e0dcdc' : '#1b1b1b',
                          }}
                        >
                          {comment.User}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color:
                            theme === AppTheme.LIGHT ? '#e0dcdc' : '#1b1b1b',
                        }}
                      >
                        {comment.Text}
                      </Text>
                    </View>
                  ))}
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
                      size={24}
                      color={Colors.WHITE}
                    />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </React.Fragment>
        ))}
      </BottomSheet>
    </>
  );
};

export default Social;
