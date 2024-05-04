import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import Close from '../../assets/close.svg';

interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open?: boolean;
  setOpen: (boolean: boolean) => void;
}

export default function PostGuestbookModal({
                                             open = false,
                                             setOpen,
                                           }: ModalProps) {
  const modalRoot = document.querySelector('#modal-root') as HTMLElement;

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    setIsComplete(content.trim().length > 0 && name.trim().length > 0);
  }, [content, name]);

  const onCancel = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(false);
  };

  return ReactDOM.createPortal(
    <>
      {open ? (
        <ModalOverlay>
          <Modal>
            <ModalTop>
              <ModalTitle>방명록 작성하기</ModalTitle>
              <CloseButton onClick={onCancel}>
                <img src={Close} />
              </CloseButton>
            </ModalTop>
            <ContentInput placeholder="내용을 입력해주세요."
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          onFocus={() => setIsInputFocused(true)}
                          onBlur={() => setIsInputFocused(false)}
                          isFocused={isInputFocused}/>
            <ModalBottom>
              <NameInput placeholder="이름을 입력해주세요."
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         onFocus={() => setIsNameFocused(true)}
                         onBlur={() => setIsNameFocused(false)}
                         isFocused={isNameFocused}/>
              <CTAButton isComplete={isComplete}>등록하기</CTAButton>
            </ModalBottom>
          </Modal>
        </ModalOverlay>
      ) : null}
    </>,
    modalRoot,
  );
}

const CloseButton = styled.div`
    cursor: pointer;
`;

const slideIn = keyframes`
    from {
        transform: translateY(-70px);
    }
    to {
        transform: translateY(0);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 0.5s;
`;

const Modal = styled.div`
    display: flex;
    width: 553px;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    border-radius: 8px;
    background: #fff;
    animation: ${slideIn} 0.5s ease;
`;

const ModalTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

const ModalTitle = styled.div`
    color: #000;
    text-align: right;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 30px */
`;

const ContentInput = styled.textarea<{ isFocused: boolean }>`
    display: flex;
    height: 192px;
    padding: 12px;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid ${(props) => (props.isFocused ? '#181826' : '#ececf1')};
    background: var(--700, #f8f8fc);
    color: var(--100, #181826);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    resize: none;
    outline: none;
    &::placeholder {
        color: var(--500, #bbbbc4);
    }
`;

const ModalBottom = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`;

const CTAButton = styled.div<{ isComplete: boolean }>`
    display: flex;
    padding: 8px 20px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border-radius: 8px;
    background: ${(props) => (props.isComplete ? '#181826' : '#BBBBc4')};
    color: var(--800, #fff);

    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
`;

const NameInput = styled.input<{ isFocused: boolean }>`
    display: flex;
    padding: 12px;
    align-items: flex-start;
    gap: 10px;
    flex: 1 0 0;
    outline: none;
    border-radius: 8px;
    border: 1px solid ${(props) => (props.isFocused ? '#181826' : '#ececf1')};
    background: var(--700, #f8f8fc);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    &::placeholder {
        color: var(--500, #bbbbc4);
    }
`;
