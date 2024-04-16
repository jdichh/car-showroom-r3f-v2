import { SpotLight } from "@react-three/drei";

const Lighting = () => {
  const WHITE = "#FFFFFF";

  const spotlightParams = {
    directionalLightIntensity: 0.0075,
    directionalLightX: 0,
    directionalLightY: 29,
    directionalLightZ: 0,

    topSpotlightColor: WHITE,
    topSpotlightIntensity: 100,
    topSpotlightAngle: 1.2,
    topSpotlightPenumbra: 1.9,
    topSpotlightDistance: 29,
    topSpotlightX: 0,
    topSpotlightY: 12,
    topSpotlightZ: 0,

    frontSpotlightColor: WHITE,
    frontSpotlightIntensity: 125,
    frontSpotlightAngle: 1,
    frontSpotlightPenumbra: 1,
    frontSpotlightDistance: 40,
    frontSpotlightX: 0,
    frontSpotlightY: 1,
    frontSpotlightZ: 29,

    rearSpotlightColor: WHITE,
    rearSpotlightIntensity: 125,
    rearSpotlightAngle: 1,
    rearSpotlightPenumbra: 0.65,
    rearSpotlightDistance: 40,
    rearSpotlightX: 0,
    rearSpotlightY: 1,
    rearSpotlightZ: -29,

    rightSpotlightColor: WHITE,
    rightSpotlightIntensity: 125,
    rightSpotlightAngle: 1,
    rightSpotlightPenumbra: 1,
    rightSpotlightDistance: 40,
    rightSpotlightX: -29,
    rightSpotlightY: 1,
    rightSpotlightZ: 0,

    leftSpotlightColor: WHITE,
    leftSpotlightIntensity: 125,
    leftSpotlightAngle: 1,
    leftSpotlightPenumbra: 1,
    leftSpotlightDistance: 40,
    leftSpotlightX: 29,
    leftSpotlightY: 1,
    leftSpotlightZ: 0,
  };

  return (
    <>
      <directionalLight
        castShadow
        intensity={spotlightParams.directionalLightIntensity}
        position={[
          spotlightParams.directionalLightX,
          spotlightParams.directionalLightY,
          spotlightParams.directionalLightZ,
        ]}
        shadow-mapSize={[128, 128]}
        shadow-camera-near={10}
        shadow-camera-far={100}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-bias={-0.0025}
      />

      <SpotLight
        color={spotlightParams.topSpotlightColor}
        intensity={spotlightParams.topSpotlightIntensity}
        distance={spotlightParams.topSpotlightDistance}
        angle={spotlightParams.topSpotlightAngle}
        penumbra={spotlightParams.topSpotlightPenumbra}
        position={[
          spotlightParams.topSpotlightX,
          spotlightParams.topSpotlightY,
          spotlightParams.topSpotlightZ,
        ]}
        castShadow
        shadow-bias={-0.001}
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-camera-near={0.1}
        shadow-camera-far={29}
      />

      <SpotLight
        color={spotlightParams.frontSpotlightColor}
        intensity={spotlightParams.frontSpotlightIntensity}
        distance={spotlightParams.frontSpotlightDistance}
        angle={spotlightParams.frontSpotlightAngle}
        penumbra={spotlightParams.frontSpotlightPenumbra}
        position={[
          spotlightParams.frontSpotlightX,
          spotlightParams.frontSpotlightY,
          spotlightParams.frontSpotlightZ,
        ]}
        castShadow
        shadow-bias={-0.001}
        shadow-mapSize-width={128}
        shadow-mapSize-height={128}
        shadow-camera-near={0.1}
        shadow-camera-far={25}
      />

      <SpotLight
        color={spotlightParams.rearSpotlightColor}
        intensity={spotlightParams.rearSpotlightIntensity}
        distance={spotlightParams.rearSpotlightDistance}
        angle={spotlightParams.rearSpotlightAngle}
        penumbra={spotlightParams.rearSpotlightPenumbra}
        position={[
          spotlightParams.rearSpotlightX,
          spotlightParams.rearSpotlightY,
          spotlightParams.rearSpotlightZ,
        ]}
        castShadow
        shadow-bias={-0.001}
        shadow-mapSize-width={128}
        shadow-mapSize-height={128}
        shadow-camera-near={0.1}
        shadow-camera-far={25}
      />

      <SpotLight
        color={spotlightParams.leftSpotlightColor}
        intensity={spotlightParams.leftSpotlightIntensity}
        distance={spotlightParams.leftSpotlightDistance}
        angle={spotlightParams.leftSpotlightAngle}
        penumbra={spotlightParams.leftSpotlightPenumbra}
        position={[
          spotlightParams.leftSpotlightX,
          spotlightParams.leftSpotlightY,
          spotlightParams.leftSpotlightZ,
        ]}
        castShadow
        shadow-bias={-0.001}
        shadow-mapSize-width={128}
        shadow-mapSize-height={128}
        shadow-camera-near={0.1}
        shadow-camera-far={25}
      />

      <SpotLight
        color={spotlightParams.rightSpotlightColor}
        intensity={spotlightParams.rightSpotlightIntensity}
        distance={spotlightParams.rightSpotlightDistance}
        angle={spotlightParams.rightSpotlightAngle}
        penumbra={spotlightParams.rightSpotlightPenumbra}
        position={[
          spotlightParams.rightSpotlightX,
          spotlightParams.rightSpotlightY,
          spotlightParams.rightSpotlightZ,
        ]}
        castShadow
        shadow-bias={-0.001}
        shadow-mapSize-width={128}
        shadow-mapSize-height={128}
        shadow-camera-near={0.1}
        shadow-camera-far={25}
      />
    </>
  );
};

export default Lighting;
