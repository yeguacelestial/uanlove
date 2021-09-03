import React from 'react';
import { View } from 'react-native';
import UserProfileDetail from '@components/UserProfileDetail';

const ProfileDetailScreen: React.FC = () => {
  return (
    <View>
      <UserProfileDetail
        age={34}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et dignissim nibh. Donec tincidunt vulputate nisl, id ornare erat egestas vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris egestas diam quis arcu feugiat, et sollicitudin ligula interdum. Vivamus non elementum dolor. Phasellus tristique felis ut orci sagittis, sit amet cursus ipsum facilisis. Quisque quam felis, posuere elementum pellentesque et, maximus et nisi. Duis euismod viverra purus, sed pretium massa varius at. Aliquam erat volutpat. Donec vestibulum sapien a risus luctus gravida. Sed vitae nibh tellus. Sed pretium sapien rhoncus odio consequat, mollis lacinia arcu facilisis. Quisque ullamcorper turpis id dictum feugiat.

        Donec sagittis justo quis est commodo, iaculis vulputate nunc facilisis. Aliquam luctus maximus neque, at dapibus nibh euismod vitae. Nulla non velit quis velit gravida mollis ut eu mi. Integer a auctor ipsum, semper convallis quam. Aenean ullamcorper, enim sit amet cursus vestibulum, augue augue laoreet quam, a tincidunt urna quam quis libero. Duis iaculis, elit ut malesuada semper, ex nunc placerat massa, ac venenatis dui diam id magna. Sed tortor purus, vehicula vitae commodo sed, tempus eget erat. Vestibulum bibendum varius diam sit amet condimentum. Donec erat nisi, laoreet eget consequat eleifend, ultrices eu lorem. In ultricies commodo eleifend.
        
        Nulla libero ipsum, blandit sit amet commodo nec, mattis in arcu. Etiam semper viverra lacus non luctus. Vestibulum vulputate porttitor tortor at porta. Praesent rhoncus lectus eu magna molestie, a mattis urna porttitor. Mauris a finibus nibh, at euismod lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras eu justo vel dui eleifend lobortis eu vitae turpis. Etiam et felis egestas, maximus purus ut, laoreet nisl. Suspendisse potenti. Aenean leo sapien, efficitur commodo orci a, blandit condimentum erat. Curabitur facilisis in urna lobortis rhoncus. Etiam vel orci augue.
        
        Sed arcu odio, egestas ac eros sit amet, elementum mattis nibh. In euismod porta tortor vel fringilla. Proin ac erat a purus euismod maximus. Fusce auctor, dui ornare porta cursus, nisl quam maximus ligula, eu rhoncus purus ligula a libero. Nullam dictum felis felis, vitae lacinia lacus hendrerit nec. Praesent mi ligula, pulvinar eu tellus a, commodo tincidunt orci. Etiam massa tellus, consequat ut pharetra sed, ullamcorper at risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean in ante nisl. Sed accumsan nunc enim, sit amet placerat purus eleifend a. Phasellus euismod ligula ligula, sed dapibus leo placerat eget."
        facultad="Facultad de Ingenieria Mecánica y Eléctrica"
        name="Lionel"
        nivel="Estudiante Superior"
        pictures={[
          'https://image.shutterstock.com/image-photo/head-shot-portrait-smiling-middle-600w-1339318991.jpg',
          'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600w-1640944705.jpg'
        ]}
      // onPressInfo={() => navigation.push('profile-detail')}
      ></UserProfileDetail>
    </View>
  );
};

export default ProfileDetailScreen;
