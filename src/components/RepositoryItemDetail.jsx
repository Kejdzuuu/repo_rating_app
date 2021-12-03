import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useParams } from "react-router";
import { format } from "date-fns";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
import theme from "../theme";

const scoreContainerSize = 45;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.containerBackground,
    flexDirection: "row",
  },
  textContainer: {
    flexDirection: "column",
    flexShrink: 1,
  },
  scoreContainer: {
    margin: 10,
    width: scoreContainerSize,
    height: scoreContainerSize,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: scoreContainerSize / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  scoreText: {
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  infoContainer: {
    flexDirection: "column",
    padding: 10,
    flexShrink: 1,
  },
  userText: {
    paddingTop: 10,
    fontWeight: "bold",
  },
  reviewText: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  linkButtonContainer: {
    borderRadius: 5,
    padding: 10,
  },
  separator: {
    height: 10,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{review.rating}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.userText}>{review.user.username}</Text>
        <Text color="textSecondary">
          {format(new Date(review.createdAt), "dd.MM.yyyy")}
        </Text>
        <Text style={styles.reviewText}>{review.text}</Text>
      </View>
    </View>
  );
};

const ItemSeparator = () => {
  return <View style={styles.separator}></View>;
};

const RepositoryItemDetail = () => {
  const { id } = useParams();
  const { repository } = id && useRepository(id);
  const reviews = repository
    ? repository.reviews.edges.map((review) => review.node)
    : [];

  if (repository) {
    return (
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => (
          <>
            <RepositoryItem repo={repository} detailView={true} />
            <ItemSeparator />
          </>
        )}
        ItemSeparatorComponent={ItemSeparator}
      />
    );
  } else {
    return null;
  }
};

export default RepositoryItemDetail;
