import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {globaleStyles} from '../Styles';

const ScrollView = () => {
    const textInHome = ("Home!");
    
        return (
            <View style={globaleStyles.homeView}>
                <Icon name="home" size={50} color="black" />
                <Text style={globaleStyles.styleHome}>
                <Text>{textInHome}</Text>
                </Text>
                <ScrollView>
                <Text style={globaleStyles.homeText}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius rhoncus dui sed tempor. Morbi faucibus velit quis est feugiat, a lobortis velit convallis. Morbi ac massa id est mollis ultricies. Donec augue nibh, blandit pulvinar tincidunt id, dignissim a sem. Mauris et mattis lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus urna ligula, non ultricies mauris fringilla dictum. Maecenas tempus eros massa, eu ornare enim convallis nec. Ut id placerat erat. Donec diam magna, aliquet ut enim ac, placerat luctus lacus. Donec a ipsum malesuada, eleifend nunc in, vulputate magna. Sed massa libero, rutrum et urna et, facilisis mattis erat. Cras odio ante, ullamcorper id luctus at, mattis in mauris. Nulla porttitor feugiat mauris, quis interdum nibh fringilla eget. Suspendisse aliquam erat elit, non aliquet tortor lobortis laoreet.

Quisque convallis scelerisque sem, a finibus nisi viverra eget. Proin dui justo, pharetra non erat sit amet, suscipit tincidunt sem. Ut at nibh eu sem rutrum facilisis varius eu eros. Cras nulla erat, lacinia nec gravida at, egestas ut diam. Etiam in sapien sed magna congue volutpat. Donec eget volutpat magna, quis tempus odio. Curabitur ut lobortis turpis. Phasellus tempus dolor augue, ornare porttitor quam dictum sed. Nam sit amet fermentum nunc, non tincidunt risus. Praesent nec velit semper, sollicitudin ipsum at, posuere risus. Duis ultrices pretium pretium. Ut faucibus, lorem id accumsan varius, quam lorem euismod neque, vel vehicula lorem nibh quis arcu. Nulla id lorem gravida, facilisis ligula eget, aliquam turpis.

In a justo et magna congue egestas. Sed sit amet odio elit. Curabitur consectetur sapien eu urna imperdiet, in lobortis lacus tincidunt. Vivamus posuere dolor dui, sit amet accumsan erat commodo nec. Aliquam vitae vehicula nisi, feugiat porttitor nisl. Nunc ac est laoreet, lacinia ipsum eget, feugiat nibh. In et ex vitae dolor convallis egestas quis eget ligula. Duis magna leo, hendrerit non metus et, euismod semper ex. In vitae semper lectus. Sed dignissim magna mauris, eget ultrices lectus lacinia ac. Sed eget nisi eu dolor porttitor rhoncus. Ut elementum ut lorem in congue. Fusce sed ultricies ligula, ac ullamcorper sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vitae sollicitudin felis.

Proin risus risus, interdum eget odio a, faucibus venenatis lacus. Mauris gravida vestibulum ante, eu semper augue dapibus sit amet. Morbi non quam eget sem ullamcorper fringilla in et mauris. Maecenas tincidunt fermentum quam eu dapibus. Nulla varius, nunc sit amet fringilla mollis, sapien enim finibus orci, ac vulputate nibh odio eu neque. Pellentesque tempus efficitur congue. Morbi vulputate quam lacus, non ultrices risus efficitur gravida. Praesent imperdiet id enim eu viverra. Sed nunc lectus, tempor sed eleifend a, porta a libero. Fusce in nisi finibus, suscipit lorem nec, porttitor est. Nunc vel nisl arcu.

Nullam quis est a mauris interdum facilisis et sit amet nibh.Quisque convallis scelerisque sem, a finibus nisi viverra eget. Proin dui justo, pharetra non erat sit amet, suscipit tincidunt sem. Ut at nibh eu sem rutrum facilisis varius eu eros. Cras nulla erat, lacinia nec gravida at, egestas ut diam. Etiam in sapien sed magna congue volutpat. Donec eget volutpat magna, quis tempus odio. Curabitur ut lobortis turpis. Phasellus tempus dolor augue, ornare porttitor quam dictum sed. Nam sit amet fermentum nunc, non tincidunt risus. Praesent nec velit semper, sollicitudin ipsum at, posuere risus. Duis ultrices pretium pretium. Ut faucibus, lorem id accumsan varius, quam lorem euismod neque, vel vehicula lorem nibh quis arcu. Nulla id lorem gravida, facilisis ligula eget, aliquam turpis.

In a justo et magna congue egestas. Sed sit amet odio elit. Curabitur consectetur sapien eu urna imperdiet, in lobortis lacus tincidunt. Vivamus posuere dolor dui, sit amet accumsan erat commodo nec. Aliquam vitae vehicula nisi, feugiat porttitor nisl. Nunc ac est laoreet, lacinia ipsum eget, feugiat nibh. In et ex vitae dolor convallis egestas quis eget ligula. Duis magna leo, hendrerit non metus et, euismod semper ex. In vitae semper lectus. Sed dignissim magna mauris, eget ultrices lectus lacinia ac. Sed eget nisi eu dolor porttitor rhoncus. Ut elementum ut lorem in congue. Fusce sed ultricies ligula, ac ullamcorper sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vitae sollicitudin felis.

Proin risus risus, interdum eget odio a, faucibus venenatis lacus. Mauris gravida vestibulum ante, eu semper augue dapibus sit amet. Morbi non quam eget sem ullamcorper fringilla in et mauris. Maecenas tincidunt fermentum quam eu dapibus. Nulla varius, nunc sit amet fringilla mollis, sapien enim finibus orci, ac vulputate nibh odio eu neque. Pellentesque tempus efficitur congue. Morbi vulputate quam lacus, non ultrices risus efficitur gravida. Praesent imperdiet id enim eu viverra. Sed nunc lectus, tempor sed eleifend a, porta a libero. Fusce in nisi finibus, suscipit lorem nec, porttitor est. Nunc vel nisl arcu.

Nullam quis est a mauris interdum facilisis et sit amet nibh Nullam tempus tincidunt dolor ac euismod. Aliquam elit nisi, dictum sed tortor et, interdum aliquet velit. Curabitur hendrerit felis a cursus sollicitudin. Donec fringilla, neque posuere cursus iaculis, tortor neque imperdiet purus, a lobortis orci neque interdum dui. Proin vitae urna vitae elit tincidunt tristique. Morbi bibendum dui in nulla volutpat fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</Text>
            </ScrollView>
            </View>
            
        );      
}

export default ScrollView;