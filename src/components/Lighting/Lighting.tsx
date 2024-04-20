import { Lightformer, SpotLight } from "@react-three/drei";

const Lighting = () => {
  const white = "#FFFFFF";
  const lightIntensity = 1000;
  const lightDistance = 50;
  const shadowResolution = 1024;
  const shadowBias = -0.00065;
  const spotlightHeight = 10;
  const spotlightPenumbra = 1;

  const spotlightParams = {
    directionalLightIntensity: 0.001,
    directionalLightX: 0,
    directionalLightY: 30,
    directionalLightZ: 0,

    topSpotlightColor: white,
    topSpotlightIntensity: lightIntensity,
    topSpotlightAngle: 2.38,
    topSpotlightPenumbra: spotlightPenumbra,
    topSpotlightDistance: 45,
    topSpotlightX: 0,
    topSpotlightY: 15,
    topSpotlightZ: 0,

    frontSpotlightColor: white,
    frontSpotlightIntensity: lightIntensity,
    frontSpotlightAngle: 1.3,
    frontSpotlightPenumbra: spotlightPenumbra,
    frontSpotlightDistance: lightDistance,
    frontSpotlightX: 0,
    frontSpotlightY: spotlightHeight,
    frontSpotlightZ: 30,

    rearSpotlightColor: white,
    rearSpotlightIntensity: lightIntensity,
    rearSpotlightAngle: 1.5,
    rearSpotlightPenumbra: spotlightPenumbra,
    rearSpotlightDistance: lightDistance,
    rearSpotlightX: 0,
    rearSpotlightY: spotlightHeight,
    rearSpotlightZ: -30,

    rightSpotlightColor: white,
    rightSpotlightIntensity: lightIntensity,
    rightSpotlightAngle: 1,
    rightSpotlightPenumbra: spotlightPenumbra,
    rightSpotlightDistance: lightDistance,
    rightSpotlightX: -30,
    rightSpotlightY: spotlightHeight,
    rightSpotlightZ: 0,

    leftSpotlightColor: white,
    leftSpotlightIntensity: lightIntensity,
    leftSpotlightAngle: 1,
    leftSpotlightPenumbra: spotlightPenumbra,
    leftSpotlightDistance: lightDistance,
    leftSpotlightX: 30,
    leftSpotlightY: spotlightHeight,
    leftSpotlightZ: 0,
  };

  return (
    <>
      <Lightformer
        form="rect"
        position={[0, 10, 0]}
        rotation={[1.57, 0, 0]}
        scale={[15, 25, 0]}
      />
      <group name="lights">
        {/* lighting for testing/development */}
        {/* <ambientLight intensity={1} /> */}

        <directionalLight
          intensity={spotlightParams.directionalLightIntensity}
          position={[
            spotlightParams.directionalLightX,
            spotlightParams.directionalLightY,
            spotlightParams.directionalLightZ,
          ]}
          castShadow
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
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
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
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
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
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
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
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
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
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
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
        />
      </group>
    </>
  );
};

export default Lighting;
