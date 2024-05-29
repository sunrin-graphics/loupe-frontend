import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import Close from '../../assets/close.svg';
import { usePostNote } from '@/hooks/note';

interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open?: boolean;
  setOpen: (boolean: boolean) => void;
}

export default function PostGuestbookModal({
  open = false,
  setOpen,
}: ModalProps) {
  const { mutate: postNote, isError, reset } = usePostNote();

  const modalRoot = document.querySelector('#modal-root') as HTMLElement;

  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    reset();
  };

  const onSubmit = () => {
    postNote(
      { message: content, author: name },
      {
        onSuccess: () => {
          setOpen(false);
          setErrorMessage(null);
        },
        onError: (error: any) => {
          setErrorMessage(error.message);
        },
      },
    );
  };

  return ReactDOM.createPortal(
    <>
      {open ? (
        <ModalOverlay onClick={onCancel}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalTop>
              <ModalTitle>방명록 작성하기</ModalTitle>
              <CloseButton onClick={onCancel}>
                <img src={Close} />
              </CloseButton>
            </ModalTop>
            <ContentInputContainer>
              <ContentInput
                placeholder="내용을 입력해주세요."
                value={content}
                onChange={(e) => {
                  // 글자수 제한
                  if (e.target.value.length > 300) {
                    setContent(e.target.value.slice(0, 300));
                  } else {
                    setContent(e.target.value);
                  }
                }}
              />
              <LengthLabel $full={content.length === 300}>
                {content.length}/300 자
              </LengthLabel>
            </ContentInputContainer>

            <ModalBottom>
              <NameInput
                placeholder="이름을 입력해주세요."
                value={name}
                onChange={(e) => {
                  // 글자수 제한
                  if (e.target.value.length > 10) {
                    setName(e.target.value.slice(0, 10));
                  } else {
                    setName(e.target.value);
                  }
                }}
              />
              <CTAButton
                onClick={isComplete ? onSubmit : onCancel}
                isComplete={isComplete}
              >
                등록하기
              </CTAButton>
            </ModalBottom>
            {isError && <Error>{errorMessage}</Error>}
          </Modal>
        </ModalOverlay>
      ) : null}
    </>,
    modalRoot,
  );
}

const LengthLabel = styled.div<{
  $full: boolean;
}>`
  color: ${(props) => (props.$full ? '#FF0000' : ' #878797')};
  text-align: right;
  align-self: flex-end;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`;

const ContentInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 192px;
  padding: 12px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px #ececf1;
  border: none;
  background: var(--700, #f8f8fc);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  transition: box-shadow 0.2s;
  line-height: 150%; /* 24px */
  resize: none;
  outline: none;
  &:focus {
    box-shadow: inset 0 0 0 1px #bbbbc4;
  }
  @media (max-width: 744px) {
    font-size: 14px;
    height: 150px;
  }
  @media (max-width: 1300px) {
    height: 168px;
  }
`;

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
  @media (max-width: 744px) {
    padding: 0 20px;
  }
`;

const Error = styled.div`
  color: #f00;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
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
  @media (max-width: 744px) {
    width: 100%;
    padding: 16px;
  }
  @media (max-width: 1300px) {
    width: 480px;
  }
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
  @media (max-width: 744px) {
    font-size: 18px;
  }
`;

const ContentInput = styled.textarea`
  align-self: stretch;
  background: none;
  flex: 1;
  border: none;
  color: var(--100, #181826);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  transition: box-shadow 0.2s;
  line-height: 150%; /* 24px */
  resize: none;
  outline: none;
  &::placeholder {
    color: var(--500, #bbbbc4);
  }
  @media (max-width: 744px) {
    font-size: 14px;
  }
`;

const ModalBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 100%;
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
  transition:
    background 0.2s,
    transform 0.2s;
  font-size: 16px;
  font-style: normal;
  word-break: keep-all;
  font-weight: 600;
  cursor: pointer;
  line-height: 150%; /* 24px */
  &:active {
    transform: scale(0.95);
    background: var(--200, #302f4b);
  }
  @media (max-width: 744px) {
    font-size: 14px;
  }
`;

const NameInput = styled.input`
  display: flex;
  padding: 12px;
  align-items: flex-start;
  gap: 10px;
  flex-basis: 100%;
  min-width: 0;
  box-sizing: border-box;
  outline: none;
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px #ececf1;
  border: none;
  background: var(--700, #f8f8fc);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  transition: box-shadow 0.2s;
  line-height: 150%; /* 24px */
  &::placeholder {
    color: var(--500, #bbbbc4);
  }
  &:focus {
    box-shadow: inset 0 0 0 1px #bbbbc4;
  }
  @media (max-width: 744px) {
    font-size: 14px;
  }
`;
