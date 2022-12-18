import { View } from 'react-native'

import { theme } from '@common/theme'
import { ActivityIndicator } from '@components/atoms/ActivityIndicator'
import { ContentListItem } from '@components/organisms/ContentListItem'
import { Post } from '@models/post'
import { FlashList } from '@shopify/flash-list'
import { HeaderOptions } from '@utils/HeaderOptions'

import { ErrorBox } from './../../common/components/molecule/Error/index'
import { useHomeViewModel } from './view-model'

export const HomeView: React.FC = () => {
    const { contents, loading, loadNextPage, handleContentPress, error } = useHomeViewModel()

    if (loading && !contents?.length)
        return (
            <View className="mt-4">
                <HeaderOptions title="TabNews" />
                <ActivityIndicator size={30} />
            </View>
        )

    if (error) return <ErrorBox error={error} />

    if (!contents?.length) return <ErrorBox type="alert" error={'Nenhum conteúdo carregado'} />

    return (
        <FlashList<Post>
            data={contents?.flat()}
            keyExtractor={(item, index) => `${item.id}${index}`}
            estimatedItemSize={42}
            renderItem={({ item, index }) => (
                <ContentListItem
                    className="my-3"
                    onPress={handleContentPress}
                    itemNumber={index + 1}
                    content={item}
                />
            )}
            contentContainerStyle={{
                paddingVertical: theme.spacing[4],
            }}
            onEndReached={loadNextPage}
            onEndReachedThreshold={0.1}
            ListFooterComponent={loading ? <ActivityIndicator /> : null}
        />
    )
}
