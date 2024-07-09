import { Dimensions, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ComparisonScreen = () => {
  return (
    <View className="flex-1 items-center justify-center before:w-full h-full">
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ['May', 'June', 'July', 'August', 'September', 'October'],
          datasets: [
            {
              data: [141.07, 140.3, 146.83, 144.18, 127.78, 120.55],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default ComparisonScreen;
