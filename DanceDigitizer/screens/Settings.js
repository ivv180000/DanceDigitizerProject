import {StyleSheet, View} from 'react-native';
import {PageHeader} from './components/PageHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function Settings(){
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.root, { paddingTop: insets.top }]}>
          <PageHeader headerText="Settings" />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      root: {
        width: 375,
        height: 812,
        flexShrink: 0,
        flex: 1, 
      },
    });
export default Settings;