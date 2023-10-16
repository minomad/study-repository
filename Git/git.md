# 병합

#### 병합취소

git merge --abort

# checkout

assets폴더만 가져갈때

git checkout develop src/assets

# degit

깃허브 저장소에서 원하는 폴더만 복사

degit 주소 폴더(클론주소)

# 커밋 취소

commit을 취소하는 경우는 Amend / Undo / Revert 였지만,

이미 깃헙에 반영된 경우는 Amend와 Revert만 선택가능하다.

Amend는 커밋 내용을 수정 코드를 취소하는 것이 아님

Revert changes in commit을 누르면 Push origin이 활성화 된다.

수정했던 파일이 돌아오지는 않는다. Push origin을 누르자.

Revert는 commit된 파일을 취소하고, 기록을 남긴다.

Reset은 해당 commit의 위치로 이동하고 기록도 날린다.
