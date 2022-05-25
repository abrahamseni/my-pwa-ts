import React from 'react'

import {
  BodyText,
  CardBodyWrap,
  CardHeading,
  CardHeadingWrap,
  CardImageWrap,
  CardListHeading,
  CardListIcon,
  CardListItem,
  CardListItemTextPrimary,
  CardListItemTextSecondary,
  CardListItemTextWrap,
  CardListMainWrap,
  CardMainWrap,
  CardSubHeading,
  CardWrap,
  elHasGreyBg,
  elRowGap6,
  elW11,
  FlexContainer,
  Icon,
  Loader,
  PageContainer,
  PersistantNotification,
  Subtitle,
  Title,
} from '@reapit/elements'

import { useGetListings } from './getListings'

export default function Home() {
  const { data: listings, status, isLoading } = useGetListings();

  return (
    <PageContainer style={{ background: "var(--color-grey-light)" }}>
      <Title>PWA Agency</Title>
      <Subtitle>Property Listings</Subtitle>
      {isLoading ? (
        <Loader label="Loading..." />
      ) : status === "error" ? (
        <PersistantNotification>
          Error get listings, please try again later.
        </PersistantNotification>
      ) : (
        <FlexContainer style={{ gap: "16px" }}>
          {listings.map((listing: any) => {
            return (
              <CardWrap key={listing.id} className={elW11}>
                <CardMainWrap>
                  <CardImageWrap>
                    <img src={listing.image} alt={listing.type} />
                  </CardImageWrap>

                  <CardHeadingWrap>
                    <CardHeading>{listing.price}</CardHeading>
                    <CardSubHeading>
                      {listing.address.streetAddress}
                    </CardSubHeading>
                  </CardHeadingWrap>
                </CardMainWrap>

                <CardBodyWrap>
                  <BodyText>
                    {listing.address.region}, {listing.address.country}
                  </BodyText>
                </CardBodyWrap>

                <CardListMainWrap>
                  <CardListHeading>Property Details</CardListHeading>
                </CardListMainWrap>

                <CardListItem>
                  <CardListIcon>
                    <Icon icon="houseInfographic" />
                  </CardListIcon>
                  <CardListItemTextWrap>
                    <CardListItemTextPrimary>
                      {listing.label}
                    </CardListItemTextPrimary>
                    <CardListItemTextSecondary>
                      {listing.type}
                    </CardListItemTextSecondary>
                  </CardListItemTextWrap>
                </CardListItem>

                <CardListItem>
                  <CardListIcon>
                    <Icon icon="houseInfographic" />
                  </CardListIcon>
                  <CardListItemTextWrap>
                    <CardListItemTextPrimary>Bed:</CardListItemTextPrimary>
                    <CardListItemTextSecondary>
                      {listing.bed}
                    </CardListItemTextSecondary>
                  </CardListItemTextWrap>
                </CardListItem>

                <CardListItem>
                  <CardListIcon>
                    <Icon icon="houseInfographic" />
                  </CardListIcon>
                  <CardListItemTextWrap>
                    <CardListItemTextPrimary>Bath:</CardListItemTextPrimary>
                    <CardListItemTextSecondary>
                      {listing.bath}
                    </CardListItemTextSecondary>
                  </CardListItemTextWrap>
                </CardListItem>

                <CardListItem>
                  <CardListIcon>
                    <Icon icon="carSolidSystem" />
                  </CardListIcon>
                  <CardListItemTextWrap>
                    <CardListItemTextPrimary>Car Park:</CardListItemTextPrimary>
                    <CardListItemTextSecondary>
                      {listing.car}
                    </CardListItemTextSecondary>
                  </CardListItemTextWrap>
                </CardListItem>

                <CardListItem>
                  <img
                    src={listing.primaryAgent?.photo}
                    alt={listing.primaryAgent.fullName}
                    style={{ borderRadius: "4px", marginRight: "10px" }}
                  />
                  <CardListItemTextWrap>
                    <CardListItemTextPrimary>
                      {listing.primaryAgent?.fullName}
                    </CardListItemTextPrimary>
                    <CardListItemTextSecondary>Agent</CardListItemTextSecondary>
                  </CardListItemTextWrap>
                </CardListItem>
              </CardWrap>
            );
          })}
        </FlexContainer>
      )}
    </PageContainer>
  );
}
