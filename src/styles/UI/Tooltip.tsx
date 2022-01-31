import React from "react";
import styled from "styled-components";
import { Z_ASCII } from "zlib";

interface Props {
  direction: "Left" | "Right" | "Top" | "Bottom";
  children: React.ReactNode;
  content: string;
}

interface ToolTipProps {
  direction: "Left" | "Right" | "Top" | "Bottom";
}

const ToolTipContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  position: relative;

  &:hover {
    .tooltip_content {
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
    }
  }
`;

const ContentWrapper = styled("div")<ToolTipProps>`
  position: absolute;
  opacity: 0;

  /* ToolTip 위치 */
  ${({ direction }) => {
    switch (direction) {
      case "Left":
        return `
          top: 50%;
          right: calc(100% + 0.8rem);
          transform: translateY(-50%);
        `;
      case "Right":
        return `
          top: 50%;
          left: calc(100% + 0.8rem);
          transform: translateY(-50%);
        `;
      case "Top":
        return `
          bottom: calc(100% + 0.8rem);
          left: 50%;
          transform: translateX(-50%);
        `;
      case "Bottom":
        return `
          top: calc(100% + 0.8rem);
          left: 50%;
          transform: translateX(-50%);
        `;
    }
  }}
`;

const Content = styled("div")<ToolTipProps>`
  background: #1c1c1c;
  color: #fff;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  line-height: 2.1rem;
  font-weight: bold;
  white-space: nowrap;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    border: 0.4rem solid;
  }

  /* ToolTip 화살표 */
  ${({ direction }) => {
    switch (direction) {
      case "Left":
        return `
          &::after {
            border-color: transparent transparent transparent #1c1c1c;
            top: 50%;
            left: 100%;
            transform: translateY(-50%);
          }
        `;
      case "Right":
        return `
          &::after {
            border-color: transparent #1c1c1c transparent transparent;
            top: 50%;
            right: 100%;
            transform: translateY(-50%);
          }
        `;
      case "Top":
        return `
            &::after {
              border-color: #1c1c1c transparent transparent transparent;
              top: 100%;
              left: 50%;
              transform: translateX(-50%);
            }
          `;
      case "Bottom":
        return `
          &::after {
            border-color: transparent transparent #1c1c1c transparent;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
          }
        `;
    }
  }}
`;

function ToolTip({ direction, children, content }: Props) {
  return (
    <ToolTipContainer>
      {children}
      {
        {
          Left: (
            <ContentWrapper className="tooltip_content" direction={direction}>
              <Content direction={direction}>{content}</Content>
            </ContentWrapper>
          ),
          Right: (
            <ContentWrapper className="tooltip_content" direction={direction}>
              <Content direction={direction}>{content}</Content>
            </ContentWrapper>
          ),
          Top: (
            <ContentWrapper className="tooltip_content" direction={direction}>
              <Content direction={direction}>{content}</Content>
            </ContentWrapper>
          ),
          Bottom: (
            <ContentWrapper className="tooltip_content" direction={direction}>
              <Content direction={direction}>{content}</Content>
            </ContentWrapper>
          ),
        }[direction]
      }
    </ToolTipContainer>
  );
}

export default ToolTip;
