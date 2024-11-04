import { getVideoById } from "@/app/actions";
import { getCategoryById } from "@/app/actions/getCategoryById";
import styles from "./page.module.css";
import { VideoWrapper } from "./components/VideoWrapper";
import { Icons } from "@/app/icons";
import Image from "next/image";
import sunSetsAlone from "../../../../public/sunSetsAlone.svg";
import spotifyPlayer from "../../../../public/spotifyPlayer.svg";
import { CarouselSection } from "@/app/components/CarouselSection";
import { LikeButton } from "@/app/components/LikeButton";
import { DislikeButton } from "@/app/components/DislikeButton";
import { ShareButton } from "@/app/components/ShareButton";
import { viewVideo } from "./actions/viewVideo";

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
}

type VideoViewProps = {
  params: Params;
};

export default async function VideoView({ params }: VideoViewProps) {
  const { id: videoId } = await params;

  const video = await getVideoById(Number(videoId));

  // Adding 1 to video views
  await viewVideo(video);

  const videoCategory = await getCategoryById(video.category);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);

    if (date.toString() === "Invalid Date") {
      return "";
    }

    // Adding zeros to day and month, if necessary
    const day =
      date.getDate().toString().length > 1
        ? date.getDate()
        : `0${date.getDate()}`;

    const month =
      date.getMonth().toString().length > 1
        ? date.getMonth()
        : `0${date.getMonth()}`;

    return `${day}/${month}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <div className={styles.pageWrapper}>
      <VideoWrapper videoSrc={video.hls_path} />

      <div className={styles.videoContent}>
        <div className={styles.videoContentHeader}>
          <h2 className={styles.videoTitle}>{video.title}</h2>

          <div className={styles.callToActionWrapper}>
            <div className={styles.subInfo}>
              <div className={styles.categoryTitle}>{videoCategory.title}</div>

              <div className={styles.createdAt}>
                {formatDate(video.created_at)}
              </div>

              <div className={styles.bookmark}>
                <Icons.Bookmark />
                <strong>Adicionar à minha lista</strong>
              </div>
            </div>

            <div className={styles.callToActionButtons}>
              <LikeButton video={video} />

              <DislikeButton video={video} />

              <ShareButton video={video} />
            </div>
          </div>
        </div>

        <div className={styles.resumeAndTutorial}>
          <div className={styles.resume}>
            <h2>Resumo</h2>

            <p className={styles.resumeParagraph}>
              E passar pelos campos fundamentais a serem preenchidos no momento
              da criação do conteúdo de vídeo na OTT. Caso tenha optado pelo
              embed de outra plataforma, pule para o título ”Como fazer colocar
              vídeo no conteúdo”.
            </p>
          </div>

          <p>
            Para acrescentar vídeo ao conteúdo, é preciso que ele esteja
            hospedado em uma plataforma que disponibilize código embed. Nós da
            Netshow.me disponibilizamos para você acesso a plataforma Netshow.me
            Live, que permite upload de vídeo e fornece código embed.
          </p>

          <p>
            Agora vamos te ensinar o passo a passo completo de upload de vídeo
            na plataforma Netshow.me Live. E passar pelos campos fundamentais a
            serem preenchidos no momento da criação do conteúdo de vídeo na OTT.
            Caso tenha optado pelo embed de outra plataforma, pule para o título
            ”Como fazer colocar vídeo no conteúdo”.
          </p>

          <h1>Como fazer upload</h1>

          <p>
            Ao acessar, selecione no menu superior a opção Gerenciar vídeos, em
            seguida Criar vídeo. Para começar o processo de upload, selecione a
            opção Carregar vídeo. Ao abrir a janela de busca, localize o arquivo
            e o selecione.
          </p>

          <h2>Arquivos complementares</h2>

          <div className={styles.files}>
            <div className={styles.file}>
              arquivo-do-curso-aula-3.pdf
              <Icons.Cloud />
            </div>
            <div className={styles.file}>
              Prototipinho top
              <Icons.Cloud />
            </div>
          </div>

          <h2>Texto</h2>

          <p>
            Para acrescentar vídeo ao conteúdo, é preciso que ele esteja
            hospedado em uma plataforma que disponibilize código embed. Nós da
            Netshow.me disponibilizamos para você acesso a plataforma Netshow.me
            Live, que permite upload.
          </p>

          <div className={styles.audio}>
            <h2>Audio</h2>

            <div className={styles.audioImages}>
              <Image src={sunSetsAlone} alt="spotify audio" />
              <Image src={spotifyPlayer} alt="spotify audio" />
            </div>
          </div>
        </div>
      </div>

      <CarouselSection sectionTitle={"Conteúdos relacionados"} />
    </div>
  );
}
