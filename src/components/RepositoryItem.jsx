import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.containerBackground,
    flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  avatarContainer: {
    padding: 10,
  },
  infoContainer: {
    flexDirection: 'column',
    padding: 10,
    flexShrink: 1,
  },
  languageContainer: {
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 5,
    flexGrow: 0,
  },
  languageText: {
    color: theme.colors.barTextPrimary,
  },
  infoText: {
    paddingBottom: 8,
  }
});

const roundToThousands = (number) => {
  if (number < 1000) {
    return number;
  } else {
    number = (number / 1000).toFixed(1);
    return number + 'k';
  }
};

const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: repo.ownerAvatarUrl
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText} fontWeight="bold" testID="repoName">{repo.fullName}</Text>
          <Text color="textSecondary" style={styles.infoText} testID="repoDescription">{repo.description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.languageText} testID="repoLanguage">{repo.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statContainer}>
          <Text fontWeight="bold" testID="repoStarCount">{roundToThousands(repo.stargazersCount)}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.statContainer}>
          <Text fontWeight="bold" testID="repoForksCount">{roundToThousands(repo.forksCount)}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.statContainer}>
          <Text fontWeight="bold" testID="repoReviewCount">{roundToThousands(repo.reviewCount)}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.statContainer}>
          <Text fontWeight="bold" testID="repoRating">{roundToThousands(repo.ratingAverage)}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
